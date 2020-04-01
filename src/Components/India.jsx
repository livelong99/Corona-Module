import React, { useState } from "react";
import rp from "request-promise";
import $ from "cheerio";

function state() {
    const siteUrl = "https://www.mohfw.gov.in/";

    return rp(siteUrl)
        .then(html => {

            const Record =[];
            for(var i=0; i<27; i++)
            {
                const rec = {
                    state: $(".content > div:nth-child(2) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child("+(i+1)+") > td:nth-child(2)",html)[0].children[0].data,
                    totalCases:  $(".content > div:nth-child(2) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child("+(i+1)+") > td:nth-child(3)",html)[0].children[0].data,
                    recovered: $(".content > div:nth-child(2) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child("+(i+1)+") > td:nth-child(4)",html)[0].children[0].data,
                    deaths: $(".content > div:nth-child(2) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child("+(i+1)+") > td:nth-child(5)",html)[0].children[0].data
                }
                Record.push(rec);
            }
            return Record;
        })
        .catch(error => {
            console.log(error)
        });
}

export default state;


