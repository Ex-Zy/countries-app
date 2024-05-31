import { Box, Skeleton } from '@mui/material'

export const CountryDetailsCardSkeleton = () => {
  return (
    <div className="country-details-card">
      <div className="country-details-card__media">
        <Box>
          <Skeleton variant="rectangular" width="100%" height={400} />
        </Box>
      </div>
      <div className="country-details-card__info">
        <h2 className="country-details-card__title">
          <Skeleton width="70%" />
        </h2>
        <ul className="country-details-card__list">
          <li className="country-details-card__item">
            <Skeleton width="40%" />
          </li>
          <li className="country-details-card__item">
            <Skeleton width="40%" />
          </li>
          <li className="country-details-card__item">
            <Skeleton width="30%" />
          </li>
          <li className="country-details-card__item">
            <Skeleton width="60%" />
          </li>
          <li className="country-details-card__item">
            <Skeleton width="50%" />
          </li>
          <li className="country-details-card__item">
            <Skeleton width="40%" />
          </li>
          <li className="country-details-card__item">
            <Skeleton width="60%" />
          </li>
          <li className="country-details-card__item">
            <Skeleton width="30%" />
          </li>
        </ul>
      </div>
    </div>
  )
}
