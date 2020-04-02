const React = require("react");
const rp = require("request-promise");
const $ = require("cheerio"); 


const siteUrl = "https://www.mohfw.gov.in/";

var Record = [];

Record = rp(siteUrl)
  .then(html => { 
    var i=0;
    var k="1234";
    const Record = [];
    
    var rec = {
      state: $(".table > tbody:nth-child(2) > tr:nth-child("+(i+1)+") > td:nth-child(2)",html)[0].children[0].data,
      totalCases:  $(".table > tbody:nth-child(2) > tr:nth-child("+(i+1)+") > td:nth-child(3)",html)[0].children[0].data,
      recovered: $(".table > tbody:nth-child(2) > tr:nth-child("+(i+1)+") > td:nth-child(4)",html)[0].children[0].data,
      deaths: $(".table > tbody:nth-child(2) > tr:nth-child("+(i+1)+") > td:nth-child(5)",html)[0].children[0].data
    }
          
      while(k.length!=0)
      {
        i++;
        Record.push(rec);
          rec = {
              state: $(".table > tbody:nth-child(2) > tr:nth-child("+(i+1)+") > td:nth-child(2)",html)[0].children[0].data,
              totalCases:  $(".table > tbody:nth-child(2) > tr:nth-child("+(i+1)+") > td:nth-child(3)",html)[0].children[0].data,
              recovered: $(".table > tbody:nth-child(2) > tr:nth-child("+(i+1)+") > td:nth-child(4)",html)[0].children[0].data,
              deaths: $(".table > tbody:nth-child(2) > tr:nth-child("+(i+1)+") > td:nth-child(5)",html)[0].children[0].data
          }
          k = $(".table > tbody:nth-child(2) > tr:nth-child("+(i+2)+") > td:nth-child(5)",html);
      }  
      return Record;    
  })
  .catch(error => {
      console.log(error)
  });

  console.log(Record);
