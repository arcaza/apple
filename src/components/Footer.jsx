import React from "react";

const Footer = () => {
  return (
    <div className="w-screen bg-neutral-100 text-zinc-600 text-sm p-7 px-80">
      <div>
        <p>
        1. Trade‑in values will vary based on the condition, year, and
        configuration of your eligible trade‑in device. Not all devices are
        eligible for credit. You must be at least the age of majority to be
        eligible to trade in for credit or for an Apple Gift Card. Trade‑in
        value may be applied toward qualifying new device purchase, or added to
        an Apple Gift Card. Actual value awarded is based on receipt of a
        qualifying device matching the description provided when estimate was
        made. Sales tax may be assessed on full value of a new device purchase.
        In‑store trade‑in requires presentation of a valid photo ID (local law
        may require saving this information). Offer may not be available in all
        stores, and may vary between in‑store and online trade‑in. Some stores
        may have additional requirements. Apple or its trade‑in partners reserve
        the right to refuse, cancel, or limit quantity of any trade‑in
        transaction for any reason. More details are available from Apple’s
        trade-in partner for trade‑in and recycling of eligible devices.
        Restrictions and limitations may apply. <br /> <br />
        To access and use all Apple Card
        features and products available only to Apple Card users, you must add
        Apple Card to Wallet on an iPhone or iPad that supports and has the
        latest version of iOS or iPadOS. Apple Card is subject to credit
        approval, available only for qualifying applicants in the United States,
        and issued by Goldman Sachs Bank USA, Salt Lake City Branch. <br /> <br />
        If you reside in the U.S. territories, please call Goldman Sachs at
        877-255-5923 with questions about Apple Card. <br /> <br />
        Learn more about how Apple
        Card applications are evaluated at support.apple.com/kb/HT209218. <br /> <br />
        Apple Intelligence is available in beta on all iPhone 16 models, iPhone 15
        Pro, iPhone 15 Pro Max, iPad mini (A17 Pro), and iPad and Mac models
        with M1 and later, with Siri and device language set to English
        (Australia, Canada, Ireland, New Zealand, South Africa, UK, or U.S.), as
        part of an iOS 18, iPadOS 18, and macOS Sequoia software update.
        Additional features and Chinese (Simplified), English (India,
        Singapore), French, German, Italian, Japanese, Korean, Portuguese
        (Brazil), and Spanish language support available in early April, with
        more languages coming over the course of the year, including Vietnamese.
        Some features may not be available in all regions or languages. <br /> <br />
        A subscription is required for Apple Arcade, Apple Fitness+, Apple Music,
        and Apple TV+. <br /> <br />
        Features are subject to change. Some features, applications, and services may not be available in all regions or all languages. 
        </p>
        <br /><br /><hr /><br />
        <div className="wrapper grid grid-cols-3 pb-4">
            {/* all the paragraphs should be Links */}
            <div>
                <h5>Shop and Learn</h5>
                <p>Store</p>
                <p>Mac</p>
                <p>iPad</p>
                <p>iPhone</p>
                <p>Watch</p>
                <p>Vision</p>
                <p>AirPods</p>
                <p>TV & Home</p>
                <p>AirTag</p>
                <p>Accessories</p>
                <p>Gift Cards</p>
            </div>
            <div>
                <h5>Apple Wallet</h5>
                <p>Wallet</p>
                <p>Apple Card</p>
                <p>Apple Pay</p>
                <p>Apple Cash</p>
            </div>

        <h5>Account</h5>
        <h5>Entertainment</h5>
        <h5>Apple Store</h5>
        <h5>For Business</h5>
        <h5>For Education</h5>
        <h5>For Healthcare</h5>
        <h5>For Government</h5>
        <h5>Apple Values</h5>
        <h5>About Apple</h5>
        </div>


        <p>More ways to shop: Find an Apple Store or other retailer near you. Or call 1-800-MY-APPLE.</p>
        <br /><br /><hr /><br />
        
        <div className="flex justify-between text-center align-middle">
            <div><p>Copyright © 2025 Apple Inc. All rights reserved.</p></div>
            <div className="flex gap-4">
                <p>Privacy</p>
                <p>Policy</p>
                <p>Terms of Use</p>
                <p>Sales and Refunds</p>
                <p>Legal</p>
                <p>Site Map</p>
            </div>
            <div><p>United States</p></div>
        </div>

      </div>
    </div>
  );
};

export default Footer;
