import clsx from 'clsx';
import { Link } from 'react-router-dom';

import styles from './Home.module.scss';

// Constant data
import productItems from '../../constants/productItems';
import producers from '../../constants/producer';
import categories from '../../constants/categories';
import images from '../../assets/img';

// Component
import Catalog from '../../components/Catalog';
import BannerSlide from './BannerSlide';
import ListProduct from '../../components/ListProducts';
import Section from './Section';
import Slide from '../../components/Slide';
import Categories from './Categories';

function HomePage() {
    return (
        <div className={clsx(styles.wrapper)}>
            <section className={clsx(styles.topHome)}>
                <div className={clsx(styles.mainMenu)}>
                    <Catalog />
                </div>
                <div className={clsx(styles.slider)}>
                    <BannerSlide />
                </div>
                <div className={clsx(styles.banner)}>
                    {images.banners.topHomeBanner.map((banner, index) => {
                        return (
                            <Link to="/" key={index}>
                                <img src={banner} className={clsx(styles.banner)} alt="" />
                            </Link>
                        );
                    })}
                </div>
            </section>
            {Object.keys(producers).map((key, index) => {
                return (
                    <Section key={index} type={key} data={producers[key]}>
                        <Slide
                            slideShowItemLength={productItems.length / 2 - 5}
                            translatePercent={20}
                            showHandleSlideBtn={true}
                            settingStyles={{
                                maxHeight: 926,
                                display: 'flex',
                                flexFlow: 'column wrap',
                                gap: 10,
                                padding: '0 5px',
                            }}
                        >
                            <ListProduct data={productItems} />
                        </Slide>
                    </Section>
                );
            })}

            {Object.keys(categories).map((type, index) => {
                return (
                    <Section key={index} type={type} data={[]}>
                        <Categories data={categories[type]} type={type} />
                    </Section>
                );
            })}

            <Section type={''} data={[]} title={'Ưu đãi thanh toán'}>
                <div className={clsx(styles.brandBanner)}>
                    {images.banners.paymentIncentive.map((banner, index) => {
                        return (
                            <Link key={index} to="/" className={clsx(styles.brandBannerImg)}>
                                <img src={banner} alt="" />
                            </Link>
                        );
                    })}
                </div>
            </Section>

            <Section type={''} data={[]} title={'chuyên trang thương hiệu'}>
                <div className={clsx(styles.brandBanner)}>
                    {images.banners.brandIncentive.map((banner, index) => {
                        return (
                            <Link key={index} to="/" className={clsx(styles.brandBannerImg)}>
                                <img src={banner} alt="" />
                            </Link>
                        );
                    })}
                </div>
            </Section>

            <Section type={''} data={[]} title={'tin công nghệ'}>
                <div className={clsx(styles.techNews)}>
                    {images.techNews.map((news, index) => {
                        return (
                            <Link key={index} to="/" className={clsx(styles.news)}>
                                <img src={news.img} alt="" className={clsx(styles.newsImg)} />
                                <p className={clsx(styles.newsTitle)}>{news.title}</p>
                            </Link>
                        );
                    })}
                </div>
            </Section>
        </div>
    );
}

export default HomePage;
