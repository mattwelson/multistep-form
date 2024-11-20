export const prices = {
  plans: {
    arcade: {
      monthly: 9,
      yearly: 90,
      monthlyDiscount: 2,
    },
    advanced: {
      monthly: 12,
      yearly: 120,
      monthlyDiscount: 2,
    },
    pro: {
      monthly: 15,
      yearly: 150,
      monthlyDiscount: 2,
    },
  },
  // TODO: change atoms or schema to be dynamically based off this?
  addons: {
    onlineService: {
      monthly: 1,
      yearly: 10,
      title: "Online service",
      description: "Access to multiplayer games",
    },
    storage: {
      monthly: 2,
      yearly: 20,
      title: "Larger storage",
      description: "Extra 1TB of cloud save",
    },
    profile: {
      monthly: 2,
      yearly: 20,
      title: "Customizable profile",
      description: "Custom theme on your profile",
    },
  },
};
