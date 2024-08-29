import { 
    Smartphone, 
    Laptop, 
    Tablet, 
    Headphones, 
    Camera, 
    Printer, 
    Monitor, 
    HardDrive, 
    WatchIcon,
    SpeakerIcon
} from 'lucide-react';

const categories = [
    { id: 1, name: 'Smartphones', icon: Smartphone },
    { id: 2, name: 'Laptops', icon: Laptop },
    { id: 3, name: 'Tablets', icon: Tablet },
    { id: 4, name: 'Smartwatch', icon: WatchIcon },
    { id: 5, name: 'Headphones', icon: Headphones },
    { id: 6, name: 'Speakers', icon: SpeakerIcon },
    { id: 7, name: 'Cameras', icon: Camera },
    { id: 8, name: 'Printers', icon: Printer },
    { id: 9, name: 'Monitors', icon: Monitor },
    { id: 10, name: 'Storage', icon: HardDrive },
];

export default categories;