import { IEventProps } from '@app/interfaces/dashboard-event';
import React from 'react';
import { View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { LazyImage } from '../lazy-image/lazy-image';
import { styles } from '@app/components/event-card/event-card.styles';


/** @description Компонент для карточки мероприятия (включает ленивую загрузку изображения) */
export const EventCard: React.FC<{
    event: IEventProps;
  }> = ({ event }) => (
    <Card style={styles.card} onPress={() => {}}>
      <LazyImage source={event.image} />
      <Card.Content>
        <View style={styles.rowContainer}>
          <Text variant="titleLarge" style={styles.titleText}>
            {event.title}
          </Text>
          <Text variant="bodySmall" style={styles.secondaryText}>
            {event.genre}
          </Text>
        </View>
        <Text variant="bodySmall" style={styles.secondaryText}>
          {event.date}
        </Text>
        <Text variant="bodyMedium" style={styles.priceText}>
          From {event.minPrice}
        </Text>
      </Card.Content>
    </Card>
  );
  