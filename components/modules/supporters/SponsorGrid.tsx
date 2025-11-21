import NormalSupporterCard from "./NormalSupporterCard";
import BronzeSponsorCard from "./BronzeSponsorCard";
import SilverSponsorCard from "./SilverSponsorCard";
import GoldSponsorCard from "./GoldSponsorCard";
import styles from "./SponsorGrid.module.css"

type SponsorGrade = 'gold' | 'silver' | 'bronze' | 'normal'

interface SponsorData {
    name: string
    logo?: string
    logoAlt?: string
    logoWidth?: number
    logoHeight?: number
    url?: string
    description?: string
}

interface SponsorGridProps {
    sponsors: SponsorData[]
    grade: SponsorGrade
}

const COMPONENT_MAP = {
    gold: GoldSponsorCard, 
    silver: SilverSponsorCard,
    bronze: BronzeSponsorCard,
    normal: NormalSupporterCard
};

export default function SponsorGrid ({sponsors, grade}: SponsorGridProps) {
    const SponsorComponent = COMPONENT_MAP[grade];
    const gridClassName = `${styles.gridContainer} ${styles[`is-${grade}`]}`;

    return (
        <div className={gridClassName}>
            {sponsors.map((sponsor, index) => (
                <SponsorComponent
                    key={sponsor.name || index}
                    name={sponsor.name}
                    logo={sponsor.logo || ''}
                    logoAlt={sponsor.logoAlt || ''}
                    logoWidth={sponsor.logoWidth || 150}
                    logoHeight={sponsor.logoHeight || 50}
                    url={sponsor.url || ''}
                    description={sponsor.description || ''}
                />
            ))}
        </div>
    )
}
