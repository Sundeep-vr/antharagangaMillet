import { Users, TrendingUp, Heart, Leaf, Award, MapPin } from 'lucide-react';

export default function Impact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800">
              Our Impact
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              See how Antharaganga Millet FPO is transforming lives and communities 
              through sustainable agriculture and farmer empowerment.
            </p>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Our Impact in Numbers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measurable results that demonstrate our commitment to farmer welfare and sustainable agriculture.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                number: '500+',
                label: 'Active Farmers',
                description: 'Farmers directly benefiting from our programs'
              },
              {
                icon: TrendingUp,
                number: '40%',
                label: 'Income Increase',
                description: 'Average increase in farmer income'
              },
              {
                icon: MapPin,
                number: '50+',
                label: 'Villages Covered',
                description: 'Villages across Kolar district'
              },
              {
                icon: Award,
                number: '₹2.5Cr',
                label: 'Annual Turnover',
                description: 'Total value of produce handled'
              }
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-4 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <stat.icon className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-green-600">{stat.number}</div>
                <h3 className="text-lg font-semibold text-gray-800">{stat.label}</h3>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from our farming community about how Antharaganga FPO has transformed their lives.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                location: "Kolar Village",
                story: "Before joining Antharaganga FPO, I was struggling to get fair prices for my millet crops. Now, with direct market access and collective bargaining, my income has increased by 45%. I can now afford better education for my children and have invested in modern farming equipment.",
                improvement: "45% income increase",
                image: "👨‍🌾"
              },
              {
                name: "Priya Reddy",
                location: "Malur District",
                story: "As a woman farmer, I faced many challenges in accessing markets and getting fair prices. Antharaganga FPO not only provided me with market access but also training in sustainable farming practices. My millet yield has improved significantly, and I'm now a role model for other women farmers in my village.",
                improvement: "60% yield improvement",
                image: "👩‍🌾"
              },
              {
                name: "Suresh Gowda",
                location: "Bangarpet Taluk",
                story: "The collective approach of Antharaganga FPO has been a game-changer. By pooling our resources and produce, we've achieved economies of scale that were impossible individually. The technical support and training programs have helped me adopt modern farming techniques while maintaining traditional wisdom.",
                improvement: "35% cost reduction",
                image: "👨‍🌾"
              },
              {
                name: "Lakshmi Devi",
                location: "Kolar District",
                story: "Joining the FPO has given me financial independence and recognition in my community. The women's empowerment programs have helped me develop leadership skills, and I now mentor other women farmers. My family's standard of living has improved dramatically.",
                improvement: "Financial independence",
                image: "👩‍🌾"
              }
            ].map((story, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="text-4xl">{story.image}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{story.name}</h3>
                    <p className="text-gray-600 text-sm">{story.location}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">&ldquo;{story.story}&rdquo;</p>
                <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium inline-block">
                  {story.improvement}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Environmental Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to sustainable agriculture is creating positive environmental change.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: "Water Conservation",
                description: "Millet cultivation requires 70% less water compared to rice, helping conserve precious water resources.",
                impact: "70% less water usage"
              },
              {
                icon: Heart,
                title: "Soil Health",
                description: "Our sustainable farming practices improve soil fertility and prevent erosion, ensuring long-term agricultural sustainability.",
                impact: "Improved soil health"
              },
              {
                icon: Award,
                title: "Carbon Footprint",
                description: "Millet farming has a lower carbon footprint compared to traditional crops, contributing to climate change mitigation.",
                impact: "Reduced carbon footprint"
              }
            ].map((impact, index) => (
              <div key={index} className="text-center space-y-4 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <impact.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{impact.title}</h3>
                <p className="text-gray-600">{impact.description}</p>
                <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                  {impact.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Development */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Community Development</h2>
                <p className="text-xl text-gray-600">
                  Beyond farming, we&apos;re building stronger communities through education, healthcare, and social programs.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Education Support</h3>
                    <p className="text-gray-600">Scholarship programs and educational resources for farmers&apos; children.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Healthcare Access</h3>
                    <p className="text-gray-600">Health camps and medical support for farming communities.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Women Empowerment</h3>
                    <p className="text-gray-600">Special programs to empower women farmers and promote gender equality.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Skill Development</h3>
                    <p className="text-gray-600">Training programs in modern farming techniques and business skills.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">200+</div>
                  <div className="text-gray-600">Children Supported</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                  <div className="text-gray-600">Health Camps Conducted</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">150+</div>
                  <div className="text-gray-600">Women Empowered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">100+</div>
                  <div className="text-gray-600">Training Sessions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards and Recognition */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Awards & Recognition</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence has been recognized by various organizations and government bodies.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Best FPO Award 2023",
                organization: "Karnataka State Agriculture Department",
                description: "Recognized for outstanding contribution to farmer welfare and sustainable agriculture."
              },
              {
                title: "Excellence in Millet Promotion",
                organization: "Ministry of Agriculture, Government of India",
                description: "Awarded for promoting millet cultivation and creating market linkages for farmers."
              },
              {
                title: "Sustainable Agriculture Award",
                organization: "National Bank for Agriculture and Rural Development",
                description: "Honored for implementing sustainable farming practices and environmental conservation."
              }
            ].map((award, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{award.title}</h3>
                <p className="text-green-600 font-medium mb-3">{award.organization}</p>
                <p className="text-gray-600 text-sm">{award.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Be Part of Our Impact Story
            </h2>
            <p className="text-xl text-green-100">
              Join us in creating positive change for farmers, communities, and the environment. 
              Together, we can build a more sustainable and prosperous future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/join"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                Join Our Community
              </a>
              <a
                href="/products"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-600 transition-colors font-semibold"
              >
                Support Our Farmers
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
