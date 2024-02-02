import {
  Title,
  Section,
  List,
  ListItem,
  Label,
  Percentage,
} from './Statistics.styled';
import getTextColor from './helper.js';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}

      <List>
        {stats.map(({ id, label, percentage }) => {
          const statBgColor = Math.floor(Math.random() * 16777215).toString(16);
          const textColor = getTextColor(statBgColor);
          return (
            <ListItem
              key={id}
              style={{
                backgroundColor: `#${statBgColor}`,
              }}
            >
              <Label style={{ color: `${textColor}` }}>{label}</Label>
              <Percentage style={{ color: `${textColor}` }}>
                {percentage}
              </Percentage>
            </ListItem>
          );
        })}
      </List>
    </Section>
  );
};
