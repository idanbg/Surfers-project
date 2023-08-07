jQuery_T4NT(document).ready(function($) {
  // any code js

  $('.shopify-currency-form select').on('change', function() {
  $(this)
    .parents('form')
    .submit();
});
});

