import { render } from "@testing-library/react";
import { FriendAvatar } from "./FriendAvatar";

test('avatar components render with status true and img', () => {
    const img = 'https://fakedetail.com/userface_img/male/male108440371381.png';
    const available = true;

    const avatarComponent = render(<FriendAvatar img={img} available={available} />);
    const avatarSection = avatarComponent.container.querySelector('.FriendAvatar');
    const avatarImg = avatarComponent.container.querySelector('.AvatarImg');
    const avatarStatus = avatarComponent.container.querySelector('.AvatarStatus');

    expect(avatarSection).toBeInTheDocument();
    expect(avatarStatus).toHaveClass('StatusTrue');
    expect(avatarImg).toHaveAttribute('src', img);

});

test('avatar components render with status false and empty string', () => {
    const img = '';
    const available = false;

    const avatarComponent = render(<FriendAvatar img={img} available={available} />);
    const avatarSection = avatarComponent.container.querySelector('.FriendAvatar');
    const avatarImg = avatarComponent.container.querySelector('.AvatarImg');
    const avatarStatus = avatarComponent.container.querySelector('.AvatarStatus');

    expect(avatarSection).toBeInTheDocument();
    expect(avatarStatus).toHaveClass('StatusFalse');
    expect(avatarImg).toHaveAttribute('src', '/no_user_img.png');

});