import Footer from '@/components/Footer'
import MaxWrapper from '@/components/MaxWrapper'
import TopNavBar from '@/components/TopNavBar'
import ServicesSection from '@/components/home/ServicesSection'
import IntroSection from '@/components/home/IntroSection'
import SolutionsSection from '@/components/home/SolutionsSection'
import TestimonialSection from '@/components/home/TestimonialSection'
import ClientSection from '@/components/home/ClientSection'
import TeamSection from '@/components/home/TeamSection'
import ArticleSection from '@/components/home/ArticleSection'
import FaqsSection from '@/components/home/FaqsSection'

export default function Home() {
  return (
    <main>
       <TopNavBar />
        <MaxWrapper className="">
         <IntroSection />
         <ServicesSection />
         <SolutionsSection />
         <TestimonialSection />
         <ClientSection />
         <TeamSection />
         <FaqsSection />
         <ArticleSection />
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
