import Footer from '@/components/Footer'
import MaxWrapper from '@/components/MaxWrapper'
import TopNavBar from '@/components/TopNavBar'
import ServicesSection from '@/components/home/ServicesSection'
import IntroSection from '@/components/home/IntroSection'
import SolutionsSection from '@/components/home/SolutionsSection'

export default function Home() {
  return (
    <main>
       <TopNavBar />
        <MaxWrapper className="">
         <IntroSection />
         <ServicesSection />
         <SolutionsSection />
         {/* ABOUT === VALUES === CULTURE === MISSION */}
         {/* WHAT WE DO === FEATURES */}
         {/* PRODUCTS */}
         {/* TESTIMONIAL */}
         {/* CLIENTS */}
         {/* BLOGS */}
         {/* FAQS */}
        </MaxWrapper>
        <Footer />
    </main>
      
  )
}
