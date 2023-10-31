"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { airCargotTrackingConfig } from "@/utils/airCargoConfig";
// import { trackingConfig } from "@/utils/config"
type result = {
  message: string;
  link: string | undefined;
};

export default function Home() {
  const [trackingInput, setTrackingInput] = useState("");

  const [result, setResult] = useState(null);

  const onSearch = () => {
    const shipmentProvider = trackingInput.slice(0, 4);
    if (shipmentProvider in airCargotTrackingConfig) {
      airCargotTrackingConfig[shipmentProvider].getTrackingInfo(trackingInput);
    }
  };

  return (
    <main className="w-full min-h-screen">
      <nav className="w-full h-14 border-b">
        <div className="max-w-5xl mx-auto flex items-center justify-between h-full">
          <h1 className="font-medium">Metacargo</h1>
        </div>
      </nav>
      <section className="max-w-5xl mx-auto py-14">
        <div className="w-full text-center max-w-2xl mx-auto">
          <h1 className="text-5xl font-bold max-w-3xl text-center mx-auto leading-tight">
            One stop solution for all you shipment tracking
          </h1>
          <div className="flex items-center gap-2 mt-10 justify-between">
            <Input
              autoFocus
              placeholder="Your tracking number "
              value={trackingInput}
              onChange={(e) => {
                setTrackingInput(e.target.value);
              }}
            />
            <Button className="" onClick={onSearch}>
              Track
            </Button>
          </div>
          <div id="form-container"></div>
        </div>
      </section>
    </main>
  );
}
