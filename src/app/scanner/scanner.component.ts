import { Component, OnInit , EventEmitter, Output ,  ChangeDetectorRef, Input } from "@angular/core";
import { BarcodeFormat } from "@zxing/library";

@Component({
  selector: "app-scanner",
  templateUrl: "./scanner.component.html",
  styleUrls: ["./scanner.component.scss"]
})
export class ScannerComponent implements OnInit {
  availableDevices: MediaDeviceInfo[];
  currentDevice: MediaDeviceInfo = null;
  hasDevices: boolean;
  hasPermission: boolean;
  scannerEnabled: boolean = false;

  @Input() buttonLabel = 'Add';
  @Output() getQrResult = new EventEmitter();

  constructor(private cd: ChangeDetectorRef) {}
  private information: string = "Scanner";
  result : string;

  ngOnInit(): void {}

  formatsEnabled: BarcodeFormat[] = [
    BarcodeFormat.CODE_128,
    BarcodeFormat.DATA_MATRIX,
    BarcodeFormat.EAN_13,
    BarcodeFormat.QR_CODE,
  ];

  onCamerasFound(devices: MediaDeviceInfo[]): void {
    this.availableDevices = devices;

    if (this.availableDevices && this.availableDevices.length > 0) {
      this.currentDevice = this.availableDevices[0];
    }
  }

  onCodeResult(resultString: string): void {
    this.scannerEnabled = false;
    this.information = "Success ";
    console.log("resultString " + resultString)
    this.cd.markForCheck();
    this.result = resultString;
     this.getQrResult.emit(resultString) ;
  }

  public enableScanner() {
    this.scannerEnabled = !this.scannerEnabled;
    this.information = "Starting";
  }

  onHasPermission(has: boolean): void {
    this.hasPermission = has;
  }

  checkInGuest(): void {

  }



}
