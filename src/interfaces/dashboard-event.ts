/** @description Данные мероприятия */
export interface IEventProps {
    /** ID мероприятия */
    id: string;
    /** Жанр мероприятия */
    genre: string;
    /** Место проведения мероприятия */
    place: string; 
    /** Заголовок мероприятия */
    title: string;
    /** Дата мероприятия */
    date: string;
    /** Изображение мероприятия */
    image: string;
    /** Минимальная цена места */
    minPrice: number;
  }
  