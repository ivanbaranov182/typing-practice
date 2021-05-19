import React, { useEffect } from 'react';

export const Home: React.FC = () => {
  useEffect(() => {
    // console.log('mount Home');
    // dispatch(loadSections());
  }, []);
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, eum
        deserunt accusamus fugit quibusdam sed voluptatibus hic dolorem qui
        inventore exercitationem sit similique facilis nihil nulla autem esse?
        Blanditiis, repudiandae!
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus
        nam, est iure minus vero non. At quibusdam officia obcaecati quia
        consectetur recusandae similique nobis, laboriosam alias veritatis porro
        quae sed quis quidem aperiam veniam laborum ab repellendus dolorem
        maxime corporis error impedit. Debitis nihil natus voluptate fuga facere
        nobis animi quia magnam officia magni quis quibusdam ullam fugit optio,
        voluptates ipsum est quod. Delectus fuga et nam! Iure ipsam quod maxime,
        illo voluptas quos cumque mollitia! Architecto itaque est cum facere,
        expedita harum modi repellat quisquam consequatur perferendis vero qui
        at, ipsa dolorum quasi, fuga eaque sed quibusdam amet reprehenderit!
      </p>
    </>
  );
};
