import React from 'react';
import styles from '../../css/Quote.module.css';

const Page = () => {
    return (
        <div>
            <div className={styles.quote} style={{ fontSize: "40px" }}>
                &quot;There&apos;s no glory in being ordinary<br /> Dare to be different&quot;
            </div>
        </div>
    );
};

export default Page;
