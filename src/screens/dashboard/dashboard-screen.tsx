import { IEventProps } from '@app/interfaces/dashboard-event';
import { IImageProps } from '@app/interfaces/dashboard-image';
import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { Card, Text, ActivityIndicator } from 'react-native-paper';
import { styles } from '@app/screens/dashboard/dashboard.styles';

/** @description Демо-данные мероприятий */
const EVENTS: IEventProps[] = [
  {
    id: '1',
    title: 'Rock Concert Station Number 50 Top Level Area And Location',
    date: '2025-01-20',
    image: 'https://cdn.stocksnap.io/img-thumbs/960w/bluesfest-festival_6ZMXTUJ92C.jpg',
    genre: 'Rock',
    place: 'Concert Hall',
    minPrice: 5000
  },
  {
    id: '2',
    title: 'Stand-Up Comedy',
    date: '2025-01-22',
    image: 'https://cdn.stocksnap.io/img-thumbs/960w/people-woman_VS7W121851.jpg',
    genre: 'Comedy',
    place: 'Comedy Club',
    minPrice: 3000
  },
  {
    id: '3',
    title: 'Jazz Evening',
    date: '2025-01-25',
    image: 'https://cdn.stocksnap.io/img-thumbs/960w/microphone-drums_N06ELOLAT9.jpg',
    genre: 'Jazz',
    place: 'Jazz Bar',
    minPrice: 4000
  },
  {
    id: '4',
    title: 'Classical Music Gala',
    date: '2025-02-01',
    image: 'https://cdn.stocksnap.io/img-thumbs/960w/violin-classical_ULXETLYBDM.jpg',
    genre: 'Classical',
    place: 'Symphony Hall',
    minPrice: 6000
  },
  {
    id: '5',
    title: 'Classical',
    date: '2026-02-01',
    image: 'https://cdn.stocksnap.io/img-thumbs/960w/violin-classical_ULXETLYBDM.jpg',
    genre: 'Classical',
    place: 'Symphony Hall',
    minPrice: 6000
  },
];


/** @description Ленивая загрузка изображения (использует Card.Cover для отображения превью изображения) */
const LazyImage: React.FC<IImageProps> = ({ source }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <View style={styles.lazyImageContainer}>
      {!loaded && (
        <Card style={styles.activityIndicator}>
          <ActivityIndicator size="small" />
        </Card>
      )}
      <Card.Cover
        source={{ uri: source }}
        onLoad={() => setLoaded(true)}
        style={[styles.cardCover, { height: loaded ? 150 : 0, opacity: loaded ? 1 : 0 }]}
      />
    </View>
  );
};


/** @description Компонент для карточки мероприятия (включает ленивую загрузку изображения) */
const EventCard: React.FC<{
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


/** @description Компонент для отображения списка мероприятий (использует FlatList для ленивой загрузки) */
const EventList: React.FC = () => {
  const [data, setData] = useState<IEventProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  /** @description Загрузка демо-данных мероприятий */
  useEffect(() => {
    setTimeout(() => {
      setData(EVENTS);
      setLoading(false);
    }, 1000);
  }, []);

  const renderItem = ({ item }: { item: IEventProps }) => <EventCard event={item} />;

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      initialNumToRender={3}
      maxToRenderPerBatch={5}
      windowSize={10}
      contentContainerStyle={styles.flatListContent}
    />
  );
};

export default EventList;
