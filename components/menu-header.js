import Image from 'next/image'
import styles from '../styles/menu-header.module.sass'
import { useEffect, useState } from "react";

export default function MenuHeader() {

    const [isShadowVisible, setIsShadowVisible] = useState(false);

    useEffect(() => {
        const handleScroll = e => {            
            setIsShadowVisible(e.target.documentElement.scrollTop > 0);
        };

        if (document) {
            document.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (document) {
                document.removeEventListener("scroll", handleScroll);
            }
        };
    }, [setIsShadowVisible]);

    return (
        <>
            <div className={`${styles.menu} ${ isShadowVisible && styles.shadow } space-between`}>
                <div className={styles.logo}>
                    <Image 
                        src="/images/logo-white.svg" 
                        width={35}
                        height={41}
                        alt="Bernardo Gomes Nunes"
                    />
                </div>
                
                <div className="end d-flex">
                    <div className={styles.menuItem}>
                        Sobre mim
                    </div>
                    <div className={styles.menuItem}>
                        Carreira
                    </div>
                    <div className={styles.menuItem}>
                        Conhecimentos
                    </div>
                    <div className={styles.menuItem}>
                        Projetos
                    </div>
                    <div className={styles.menuItem}>
                        <select>
                            <option selected>Português</option>
                            <option>English</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    )

}