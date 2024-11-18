export interface TeamMember {
    id: string;
    name: string;
    role: string;
    imageUrl: string;
    specialties: string[];
    socialLinks?: {
        instagram?: string;
        twitter?: string;
        linkedin?: string;
    };
    schedule?: {
        monday?: string;
        tuesday?: string;
        wednesday?: string;
        thursday?: string;
        friday?: string;
        saturday?: string;
        sunday?: string;
    };
}

export const teamMembers: TeamMember[] = [
    {
        id: 'michael-smith',
        name: 'Michael Smith',
        role: 'Head Coach',
        imageUrl: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-service-1.png',
        specialties: ['Strength Training', 'HIIT', 'Nutrition Planning'],
        socialLinks: {
            instagram: 'https://instagram.com',
            twitter: 'https://twitter.com',
            linkedin: 'https://linkedin.com',
        },
        schedule: {
            monday: '09:00 - 17:00',
            tuesday: '09:00 - 17:00',
            wednesday: '09:00 - 17:00',
            thursday: '09:00 - 17:00',
            friday: '09:00 - 15:00',
        },
    },
    {
        id: 'sarah-johnson',
        name: 'Sarah Johnson',
        role: 'Fitness Instructor',
        imageUrl: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-service-2.png',
        specialties: ['Yoga', 'Pilates', 'Flexibility Training'],
        socialLinks: {
            instagram: 'https://instagram.com',
            linkedin: 'https://linkedin.com',
        },
        schedule: {
            monday: '10:00 - 18:00',
            tuesday: '10:00 - 18:00',
            thursday: '10:00 - 18:00',
            friday: '10:00 - 16:00',
            saturday: '10:00 - 14:00',
        },
    },
    {
        id: 'david-wilson',
        name: 'David Wilson',
        role: 'CrossFit Coach',
        imageUrl: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-service-3.png',
        specialties: ['CrossFit', 'Olympic Lifting', 'Conditioning'],
        socialLinks: {
            instagram: 'https://instagram.com',
            twitter: 'https://twitter.com',
        },
        schedule: {
            tuesday: '08:00 - 16:00',
            wednesday: '08:00 - 16:00',
            thursday: '08:00 - 16:00',
            friday: '08:00 - 14:00',
            saturday: '09:00 - 13:00',
        },
    },
    {
        id: 'emma-brown',
        name: 'Emma Brown',
        role: 'Nutrition Specialist',
        imageUrl: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-service-1.png',
        specialties: ['Nutrition Planning', 'Weight Management', 'Diet Consulting'],
        socialLinks: {
            instagram: 'https://instagram.com',
            linkedin: 'https://linkedin.com',
        },
        schedule: {
            monday: '11:00 - 19:00',
            wednesday: '11:00 - 19:00',
            thursday: '11:00 - 19:00',
            friday: '11:00 - 17:00',
        },
    },
];
