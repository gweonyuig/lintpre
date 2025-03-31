import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";

interface IconMenuProps {
  svgPath: string;
}

export default function Footer({ svgPath }: IconMenuProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.divider} />
      <div className={styles.title}>
        <Image src={svgPath} alt="logo" width={24} height={24} />
        COMET
      </div>
      <div className={styles.description}>
        <p>대표자 이서준</p>
        <p>전화번호 010-2514-5034</p>
      </div>
      <div className={styles.under_line}>
        <div>Copyright ⓒ 2023. COMET All rights reserved.</div>
        <div className={styles.under_line_right}>
          <div>이용약관 | 개인정보처리방침</div>
          <div>고객센터 070-1234-5678</div>
        </div>
      </div>
    </footer>
  );
}
