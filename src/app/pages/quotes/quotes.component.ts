import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class PagesQuotesComponent implements OnInit {

  @Input() sectionName: string;
  public quote: any = {
    quoteID: 6912482,
// tslint:disable-next-line:max-line-length
    retrieveURL: 'https://uat.quote.hiscox.com/portalserver/partner-agent/boldpenguin/quote-and-bind#?shortcut=retrieve&refid=B924B162-7D9E-4B1F-8D23-2467C11224A5',
    productQuote: {
      premium: {
        annual: '1641.00',
        surcharge: '0.00',
        monthly: '136.75',
        downPayment: '273.50',
        numberOfInstallments: 10
      },
      errorsAndOmissions: {
        ratingResult: {
          aggLOI: '1000000.00',
          LOI: '1000000.00',
          deductible: '500.00'
        }
      }
    }

  };

  public client: any = {
    businessSummary: {
      businessName: 'Warren Kenneth J Attorney At Law',
      businessStartYear: '2018',
      businessType: 'Limited Liability Company (LLC)',
      projectedAnnualRevenue: '5,555,555',
      projectedAnnualPayroll: '115,000.00',
      industry: 'Consultants',
      subIndustry: 'Marketing Consulting Services',
      website: 'www.wkjlaw.com'
    },
    contactInfo: {
      firstName: 'Ron',
      lastName: 'Cugino',
      emailAddress: 'cuginor2@nationwide.com',
      phoneNumber: '(714) 679-9223'
    },
    locations: [
      {
        locationAddress1: '5134 Blazer Parkway',
        locationAddress2: '',
        locationCity: 'Dublin',
        locationState: 'OH',
        locationZip: '43017',
        fullTimeEmployeesCount: 2,
        partTimeEmployeesCount: 0
      },
      {
        locationAddress1: '1234 North High Street',
        locationAddress2: 'Suite 200',
        locationCity: 'Columbus',
        locationState: 'OH',
        locationZip: '43235',
        fullTimeEmployeesCount: 20,
        partTimeEmployeesCount: 4
      }
    ],
    businessOwnersPolicyInfo: {
      locations: [
        {
          locationAddress1: '5134 Blazer Parkway',
          locationAddress2: '',
          locationCity: 'Dublin',
          locationState: 'OH',
          locationZip: '43017',
          buildingType: 'Rent / Lease',
          construction: 'Joisted Masonry',
          automaticSprinklers: 'Yes'
        },
        {
          locationAddress1: '1234 North High Street',
          locationAddress2: 'Suite 200',
          locationCity: 'Columbus',
          locationState: 'OH',
          locationZip: '43235',
          fullTimeEmployeesCount: 20,
          partTimeEmployeesCount: 4,
          buildingType: 'Rent / Lease',
          construction: 'Joisted Masonry',
          automaticSprinklers: 'Yes'
        }
      ]
    }
  };

  public locations: string[];

  pushLocations() {
    this.locations.push(this.client.businessSummary.locations);
    console.log(this.locations);
  }

  constructor() { }

  ngOnInit() {
  }

}
