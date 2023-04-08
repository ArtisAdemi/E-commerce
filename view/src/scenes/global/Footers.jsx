import React from 'react'
import { useTheme } from '@emotion/react'
import { Box, Typography } from '@mui/material'
import { shades,theme } from '../../theme'

const Footers = () => {
  const{
    palette: {neutral},
  } = useTheme();
  return (
    <Box mt="70px" p="40px 0" backgroundColor={shades.neutral[100]}>
      <Box
      width="80%"
      margin="auto"
      display="flex"
      justifyContent = "space-betwe"
      flexWrap="wrap"
      rowGap="30px"
      columnGap="clamp(20px,30px,40px)"
      >
        <Box
        width ="clamp(20%,30%,40%)">
          <Typography variant="h4" fontWeight="bold" mb="30px" color={shades.secondary[500]}>RedStoneFamily</Typography>
          <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti mollitia sunt quae saepe explicabo. Sint laudantium laborum nihil saepe. Corrupti, laudantium quam. Veritatis cum eius nemo rerum minus ex sunt ullam corrupti aut quae? Eos?</div>
        </Box>
        <Box>
    <Typography variant="h4" fontWeight="bold" mb="30px">
      About Us
    </Typography>
    <Typography mb="30px">Careers</Typography>
    <Typography mb="30px">Our Stores</Typography>
    <Typography mb="30px">Term & Conditions</Typography>
    <Typography mb="30px">Privacy Policy</Typography>
        </Box>
        <Box>
    <Typography variant="h4" fontWeight="bold" mb="30px">
      Customer Care
    </Typography>
    <Typography mb="30px">Help Center</Typography>
    <Typography mb="30px">Track Your Order</Typography>
    <Typography mb="30px">Corporate & Bulk Purchasing</Typography>
    <Typography mb="30px">Returns & Refunds</Typography>
        </Box>
        <Box
        width ="clamp(20%,25%,30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px" color={shades.secondary[500]}>Contact Us</Typography>     
          <Typography mb="30px">Ferizaj 70000</Typography>
    <Typography mb="30px">Email: filanfisteku@gmail.com</Typography>
    <Typography mb="30px">0444442222</Typography>  
           </Box>
      </Box>
    </Box>
  )
}

export default Footers