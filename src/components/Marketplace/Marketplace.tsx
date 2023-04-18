import { useState, useEffect } from "react";

interface MarketplaceProps {
  creatorId: string;
}

interface Campaign {
  id: string;
  name: string;
  description: string;
  creatorId: string;
  sponsorId: string;
  type: "live stream" | "NFT" | "virtual event";
  startDate: Date;
  endDate: Date;
  budget: number;
  status: "active" | "paused" | "completed";
}

interface Creator {
  id: string;
  name: string;
  description: string;
  website: string;
  socialLinks: { platform: string; handle: string }[];
  campaigns: Campaign[];
}

interface Sponsor {
  id: string;
  name: string;
  description: string;
  website: string;
  socialLinks: { platform: string; handle: string }[];
  campaigns: Campaign[];
}

export const Marketplace = () => {
  const creators = [
    {
      id: "1",
      name: "John Doe",
      description: "I make video game streams on Twitch",
      website: "https://www.twitch.tv/johndoe",
      socialLinks: [
        { platform: "Twitter", handle: "johndoe" },
        { platform: "Instagram", handle: "johndoe" },
      ],
      campaigns: [
        {
          id: "1",
          name: "Stream Assassin's Creed Valhalla",
          description:
            "I will play the latest Assassin's Creed game for 2 hours",
          creatorId: "1",
          sponsorId: "2",
          type: "live stream",
          startDate: new Date("2023-05-01T18:00:00Z"),
          endDate: new Date("2023-05-01T20:00:00Z"),
          budget: 2000,
          status: "active",
        },
        {
          id: "2",
          name: "Stream Fortnite",
          description: "I will play Fortnite for 1 hour",
          creatorId: "1",
          sponsorId: "3",
          type: "live stream",
          startDate: new Date("2023-05-02T19:00:00Z"),
          endDate: new Date("2023-05-02T20:00:00Z"),
          budget: 1000,
          status: "active",
        },
      ],
    },
    // other creators...
  ];

  const sponsors = [
    {
      id: "2",
      name: "ACME Corp",
      description: "We make widgets",
      website: "https://www.acmecorp.com",
      socialLinks: [
        { platform: "Twitter", handle: "acmecorp" },
        { platform: "Facebook", handle: "acmecorp" },
      ],
      campaigns: [
        {
          id: "1",
          name: "Stream Assassin's Creed Valhalla",
          description: "We want John Doe to play Assassin's Creed for 2 hours",
          creatorId: "1",
          sponsorId: "2",
          type: "live stream",
          startDate: new Date("2023-05-01T18:00:00Z"),
          endDate: new Date("2023-05-01T20:00:00Z"),
          budget: 2000,
          status: "active",
        },
        // other campaigns...
      ],
    },
    {
      id: "3",
      name: "XYZ Corp",
      description: "We make gadgets",
      website: "https://www.xyzcorp.com",
      socialLinks: [
        { platform: "Twitter", handle: "xyzcorp" },
        { platform: "LinkedIn", handle: "xyzcorp" },
      ],
      campaigns: [
        {
          id: "2",
          name: "Stream Fortnite",
          description: "We want John Doe to play Fortnite for 1 hour",
          creatorId: "1",
          sponsorId: "3",
          type: "live stream",
          startDate: new Date("2023-05-02T19:00:00Z"),
          endDate: new Date("2023-05-02T20:00:00Z"),
          budget: 1000,
          status: "active",
        },
        // other campaigns...
      ],
    },
    // other sponsors...
  ];

  //   const [creators, setCreators] = useState<Creator[]>([]);

  //   const [sponsors, setSponsors] = useState<Sponsor[]>([]);
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(
    null
  );

  const handleCampaignSelect = (campaign: Campaign) => {
    setSelectedCampaign(campaign);
  };

  const handleCampaignUnselect = () => {
    setSelectedCampaign(null);
  };

  return (
    <>
      <h2>Sponsorship Marketplace</h2>
      <div>
        <h3>Creators</h3>
        {creators.map((creator) => (
          <div key={creator.id}>
            <h4>{creator.name}</h4>
            <p>{creator.description}</p>
            <ul>
              {creator.campaigns.map((campaign) => (
                <li key={campaign.id}>
                  <button>{campaign.name}</button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div>
        <h3>Sponsors</h3>
        {sponsors.map((sponsor) => (
          <div key={sponsor.id}>
            <h4>{sponsor.name}</h4>
            <p>{sponsor.description}</p>
            <ul>
              {sponsor.campaigns.map((campaign) => (
                <li key={campaign.id}>
                  <button>{campaign.name}</button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {selectedCampaign && (
        <div>
          <h3>{selectedCampaign.name}</h3>
          <p>{selectedCampaign.description}</p>
          <p>Type: {selectedCampaign.type}</p>
          <p>Budget: ${selectedCampaign.budget}</p>
          <p>Status: {selectedCampaign.status}</p>
          <button onClick={handleCampaignUnselect}>Close</button>
        </div>
      )}
    </>
  );
};
