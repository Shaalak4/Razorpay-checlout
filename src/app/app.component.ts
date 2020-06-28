import {Component, NgZone} from '@angular/core';
import {ICustomWindow, WindowRefService} from './window-ref.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error("Method not implemented.");
  }

  private _window: ICustomWindow;
  public rzp: any;

  public options: any = {
    key: 'rzp_test_W51hfzd4n3im1V', // add razorpay key here
    name: 'Shaalak',
    description: 'Shopping',
    amount: 100, // razorpay takes amount in paisa
    prefill: {
      name: 'Shaalak',
      email: 'shaalakchaturvedi4@gmail.com', // add your email id
    },
    notes: {},
    theme: {
      color: '#3880FF'
    },
    handler: function (response){
      alert(response.razorpay_payment_id);
      alert(response.razorpay_order_id);
      alert(response.razorpay_signature)
  },
    modal: {
      ondismiss: (() => {
        this.zone.run(() => {

        })
      })
    }
  };
  constructor(
    private zone: NgZone,
    private winRef: WindowRefService
  ) {
    this._window = this.winRef.nativeWindow;
  }

  initPay(): void {
    this.rzp = new this.winRef.nativeWindow['Razorpay'](this.options);
    this.rzp.open();
  }

  paymentHandler(res: any) {
    this.zone.run(() => {
      // add API call here
    });
  }

}
