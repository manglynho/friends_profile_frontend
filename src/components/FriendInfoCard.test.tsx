
import { render, fireEvent } from "@testing-library/react";
import { FriendEntry } from "../types/friend_types";
import { FriendInfoCard } from "./FriendInfoCard";

const testFriend : FriendEntry =  {
      _id: "5a422a851b54a676234d1898",
      img: "https://fakedetail.com/userface_image/male/male108440371381.png",
      first_name: "Steph",
      last_name: "Walters",
      phone: "(820) 289-1818",
      address_1: "5190 Center Court Drive",
      city: "Spring",
      state: "TX",
      zipcode: 77370,
      bio: "I'm very choosy. I'm also very suspicious, and very irrational and I have a very short temper. I'm also extremely jealous and slow to forgive. Just so you know.",
      photos:[ 
        "https://picsum.photos/720/360",
        "https://picsum.photos/720/360",
        "https://picsum.photos/720/360"
      ],
      statuses: [
      "Developing something amazing",
      "This could be interesting....",
      "Man, life is so good",
      "There is nothing quite like a good friend",
      "Take a look around you, everything is awesome", "What is the point of all of this"
      ],
      available: true,
      friends: [],
      __v: 0
};

test('renders the user section', () => {    
  const infoCardComponent = render(<FriendInfoCard {...testFriend} />);
  const infoCardSection = infoCardComponent.container.querySelector('.FriendInfoCard');
  const infoDataSection = infoCardComponent.container.querySelector('.FriendInfoData');
  const infoTabsSection = infoCardComponent.container.querySelector('.Tabs');
  expect(infoCardSection).toBeInTheDocument();
  expect(infoDataSection).toBeInTheDocument();
  expect(infoTabsSection).toBeInTheDocument();
});

test('renders the user section and show photos', () => {    
  const infoCardComponent = render(<FriendInfoCard {...testFriend} />);
  const photosTab = infoCardComponent.container.querySelectorAll('.react-tabs__tab');

  if(photosTab)
   fireEvent.click(photosTab[1])

  expect(photosTab).not.toBe(null);
  const photosTabs = infoCardComponent.container.querySelectorAll('.photoAlbum');
  expect(photosTabs.length).toBe(testFriend.photos?.length);

});