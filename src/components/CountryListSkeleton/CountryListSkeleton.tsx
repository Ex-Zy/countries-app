import { Box, Skeleton } from '@mui/material'

export const CountryListSkeleton = () => {
  return (
    <ul className="country-list">
      {[...Array(30)].map(() => {
        return (
          <li key={Math.random()} className="country-list__item">
            <Box>
              <Skeleton variant="rectangular" width="100%" height={160} />
              <Box sx={{ pt: 0.5 }}>
                <Skeleton width="80%" />
                <Skeleton width="60%" />
                <Skeleton width="40%" />
                <Skeleton width="50%" />
              </Box>
            </Box>
          </li>
        )
      })}
    </ul>
  )
}
