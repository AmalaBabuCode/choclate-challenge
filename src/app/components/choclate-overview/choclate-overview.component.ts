import { Component, OnInit } from '@angular/core';
import {
  Choclate,
  ChoclateData,
  ChoclatePrice,
} from 'src/app/models/choclate/choclate.model';
import { ChoclateService } from 'src/app/services/choclate.service';
import {
  DomSanitizer,
  SafeResourceUrl,
  SafeUrl,
} from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choclate-overview',
  templateUrl: './choclate-overview.component.html',
  styleUrls: ['./choclate-overview.component.scss'],
})
export class ChoclateOverviewComponent implements OnInit {
  chocolateDataArray: any[] = [];
  transformedChoclateData: any[] = [];

  constructor(
    private service: ChoclateService,
    private sanitizer: DomSanitizer,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.processChoclateData();
  }

  processChoclateData() {
    this.service.getChoclateData().subscribe((data) => {
      this.chocolateDataArray = data;
    });

    this.chocolateDataArray.forEach((choclate) => {
      let choclateDetails = new ChoclateData(choclate);
      let cheapestChoclate = this.getLowestPrice(choclateDetails.prices);

      let transformedChoclate = {
        choclateDetails,
        lowestPrice: cheapestChoclate?.pricePerHundredgram,
        averagePrice: this.getAveragePrice(choclate.prices),
        cheapestOffer: cheapestChoclate ? cheapestChoclate?.price.link : '',
      };

      this.transformedChoclateData.push(transformedChoclate);
    });
    this.service.transformedChoclateData = this.transformedChoclateData;
  }

  getPrice(prices: ChoclatePrice[]) {
    let transformedChoclatePricedetails: {
      pricePerHundredgram: number;
      price: ChoclatePrice;
    }[] = [];
    prices.forEach((price) => {
      let priceDetails = {
        pricePerHundredgram: this.getPricePerHundredgram(price) as number,
        price,
      };
      transformedChoclatePricedetails.push(priceDetails);
    });
    return transformedChoclatePricedetails;
  }

  getPricePerHundredgram(price: ChoclatePrice) {
    if (price.unit === 'g') {
      if (price.amount === 100) {
        return price.price;
      } else {
        return (price.price * 100) / price.amount;
      }
    } else if (price.unit === 'kg') {
      return price.price / (price.amount * 10);
    }
    return 0;
  }

  getLowestPrice(prices: ChoclatePrice[]) {
    let transformedPrice = this.getPrice(prices) || [];

    if (transformedPrice.length > 0) {
      const cheapestChoclate = transformedPrice.reduce((acc, loc) =>
        acc.pricePerHundredgram < loc.pricePerHundredgram ? acc : loc
      );
      return cheapestChoclate;
    }
    return;
  }

  getAveragePrice(prices: ChoclatePrice[]) {
    const averagePrice =
      prices.reduce((a, { price }) => a + price, 0) / prices.length;
    return averagePrice;
  }

  navigateToDetails(id: string) {
    this.router.navigateByUrl('choclate-detail/' + id);
  }

  sanitizeUrl(url: any) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}
