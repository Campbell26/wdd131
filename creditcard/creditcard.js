$(document).ready(function () {
    Stripe.setPublishableKey('pk_test_9D43kM3d2vEHZYzPzwAblYXl');

    // Remove invalid class on input change
    $('#form-container input').on('input', function () {
        $(this).removeClass('invalid');
        $('#form-errors').addClass('hidden');
        $('#card-success').addClass('hidden');
    });

    // Show card image by type
    function checkCardType() {
        const cardNumber = $('#card-number').val();
        const cardType = Stripe.card.cardType(cardNumber);
        let img = "";
        switch (cardType) {
            case 'Visa':
                img = '<i class="fa fa-cc-visa"></i>';
                break;
            case 'MasterCard':
                img = '<i class="fa fa-cc-mastercard"></i>';
                break;
            case 'American Express':
                img = '<i class="fa fa-cc-amex"></i>';
                break;
            case 'Discover':
                img = '<i class="fa fa-cc-discover"></i>';
                break;
            default:
                img = '<i class="fa fa-credit-card"></i>';
        }
        $('#card-image').html(img);
    }

    $('#card-number').on('blur', checkCardType);

    // Find and highlight empty fields
    function findEmpty() {
        $('#form-container input[type="text"]').each(function () {
            if ($(this).val().trim() === "") {
                $(this).addClass('invalid');
            }
        });
    }

    // Submit handler
    $('#card-btn').click(function (event) {
        event.preventDefault();
        const cardNumber = $('#card-number').val().trim();
        const cardHolder = $('#card-holder').val().trim();
        const expMonth = $('#card-month').val().trim();
        const expYear = $('#card-year').val().trim();
        const cardCVC = $('#card-cvc').val().trim();

        // Check for empty fields
        if (!cardNumber || !cardHolder || !expMonth || !expYear || !cardCVC) {
            $('#form-errors').removeClass('hidden');
            $('#card-success').addClass('hidden');
            $('#card-error').text('Please complete all fields.');
            findEmpty();
            return;
        }

        // Validate with Stripe.js
        const isValidNo = Stripe.card.validateCardNumber(cardNumber);
        const isValidExpiry = Stripe.card.validateExpiry(expMonth, expYear);
        const isValidCVC = Stripe.card.validateCVC(cardCVC);

        if (!isValidNo || !isValidExpiry || !isValidCVC) {
            $('#form-errors').removeClass('hidden');
            $('#card-success').addClass('hidden');
            if (!isValidNo) {
                $('#card-error').text('Invalid credit card number.');
            } else if (!isValidExpiry) {
                $('#card-error').text('Invalid expiration date.');
            } else if (!isValidCVC) {
                $('#card-error').text('Invalid CVC code.');
            }
            return;
        }

        // Success
        $('#form-errors').addClass('hidden');
        $('#card-success').removeClass('hidden');
        // Optionally, hide the form here:
        // $('#form-container').hide();
    });
});
