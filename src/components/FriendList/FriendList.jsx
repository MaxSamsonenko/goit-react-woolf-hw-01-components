import { List, ListItem, Status, Avatar, Name } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(({ avatar, name, isOnline: isonline, id }) => {
        return (
          <ListItem key={id}>
            <Status status={isonline}></Status>
            <Avatar src={avatar} alt={name} width="48" />
            <Name>{name}</Name>
          </ListItem>
        );
      })}
    </List>
  );
};
