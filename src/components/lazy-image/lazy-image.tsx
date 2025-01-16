import { IImageProps } from '@app/interfaces/dashboard-image';
import React, { useState } from 'react';
import { View } from 'react-native';
import { Card, ActivityIndicator } from 'react-native-paper';
import { styles } from '@app/components/lazy-image/lazy-image.styles';


/** @description Ленивая загрузка изображения (использует Card.Cover для отображения превью изображения) */
export const LazyImage: React.FC<IImageProps> = ({ source }) => {
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