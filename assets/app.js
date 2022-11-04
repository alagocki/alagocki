/*
 * Andreas Lagocki - Photographer
 *
 * Copyright (C) Andreas Lagocki  - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly
 *  prohibited Proprietary and confidential.
 *
 * @author Andreas Lagocki <andreas@lagocki.de>
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.scss';

const $ = require('jquery');

require('bootstrap');

// or you can include specific pieces
// require('bootstrap/js/dist/tooltip');
// require('bootstrap/js/dist/popover');

require('@fortawesome/fontawesome-free/css/all.min.css');
require('@fortawesome/fontawesome-free/js/all.js');

$(document).ready(function() {
    $('#welcome').css('color', 'red');

    $('.show-filter').click(function (){
        $('#filter').toggle();
    });

    $('#showDate').click(function () {
        var date = jQuery('#verkaufstag').val();
        if (date !== '') {
            var formattedDate = $.date(date)
            $('#purchase-date').text(formattedDate);
            $('#setDateBtn').css('display', 'block');
        } else {
            alert('Bitte ein gültiges Datum angeben');
        }

        var getUrl = window.location;
        var baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
        var parameter = formattedDate;

        $.ajax({
            type: "POST",
            // url: baseUrl + '/set-saledate',
            url: 'https://tools.lagocki.de/set-saledate',
            data: {
                parameter: parameter,
            },
            success: function (response) {

            },
            fail: function (jqXHR, textStatus, errorThrown) {
                console.log('Error : ' + errorThrown)
            }
        });

    });

    $.date = function(dateObject) {
        var d = new Date(dateObject);
        var day = d.getDate();
        var month = d.getMonth() + 1;
        var year = d.getFullYear();
        if (day < 10) {
            day = "0" + day;
        }
        if (month < 10) {
            month = "0" + month;
        }
        return day + "." + month + "." + year;
    };

});