import { Service } from '@/types/service';

export const services: Service[] = [
    {
        id: 'personal-training',
        title: 'Personal Training',
        description: 'Personalized fitness programs tailored to your goals',
        imageUrl: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-service-1.png',
        services: ['oneOnOne', 'assessment', 'nutrition'],
    },
    {
        id: 'group-fitness',
        title: 'Group Fitness',
        description: 'High-energy group workout sessions',
        imageUrl: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-service-2.png',
        services: ['hiit', 'yoga', 'spinning'],
    },
    {
        id: 'strength-training',
        title: 'Strength Training',
        description: 'Build strength and muscle with expert guidance',
        imageUrl: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-service-3.png',
        services: ['weightlifting', 'powerlifting', 'conditioning'],
    },
];
