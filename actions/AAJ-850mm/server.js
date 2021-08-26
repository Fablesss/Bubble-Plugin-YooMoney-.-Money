function(properties, context) {
    var formcomment, shortDest, label, comment, successURL, needFio, needEmail, needPhone, needAddress;
    formcomment=shortDest=label=comment=successURL="";
    if (properties.formcomment) formcomment="&formcomment=" + properties.formcomment;
    if (properties.shortDest) shortDest="&short-dest=" + properties.shortDest;
    if (properties.label) label="&label=" + properties.label;
    if (properties.comment) comment="&comment=" + properties.comment;
    if (properties.successURL) successURL="&successURL=" + properties.successURL;
    needFio="&need-fio=" + properties.needFio;
    needEmail="&need-email=" + properties.needEmail;
    needPhone="&need-phone=" + properties.needPhone;
    needAddress="&need-address=" + properties.needAddress;

    return {
        paymentLink: "https://yoomoney.ru/quickpay/confirm.xml?receiver=" + properties.receiver + "&quickpay-form=" + properties.quickpayform + "&targets=" + properties.targets + "&paymenttype=" + properties.paymenttype + "&sum=" + properties.sum + formcomment + shortDest + label + comment + successURL + needFio + needEmail + needPhone + needAddress
    }
}