import Image from "next/image";
import styles from "./card.module.css"
export default function Card({venueName,imgSrc}:{venueName:string,imgSrc:string}){
    return (
        <div className={styles.card}>
            <div className={styles.cardimg}>
                <Image src={imgSrc} alt='Dinner Table' fill={true} className='object-cover rounded-t-lg'/>
            </div>
            <div className='w-full h-[15%] p-[10px]'>
                {venueName}
            </div>
        </div>
    );
}