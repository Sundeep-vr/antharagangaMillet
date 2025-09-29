import { Users, Target, Award, Heart, Leaf, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800">
              About Antharaganga Millet FPO
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              A government-recognized Producer Organization dedicated to empowering farmers and promoting 
              sustainable millet cultivation in Kolar, Karnataka.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Antharaganga Millet Farmer Producer Company was established with a vision to transform 
                  the agricultural landscape in Kolar, Karnataka. Founded by a group of passionate farmers 
                  and agricultural experts, our FPO has grown from a small collective to a government-recognized 
                  Producer Organization.
                </p>
                <p>
                  We recognized the untapped potential of millet cultivation in our region and the need to 
                  support small and marginal farmers who were struggling with market access and fair pricing. 
                  Today, we proudly serve over 500 farmers across 50+ villages in the Kolar district.
                </p>
                <p>
                  Our journey has been marked by continuous innovation, farmer empowerment, and a commitment 
                  to sustainable agriculture practices that benefit both our farming community and the environment.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">2019</div>
                  <div className="text-gray-600">Founded</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
                  <div className="text-gray-600">Active Farmers</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
                  <div className="text-gray-600">Villages Covered</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">₹2.5Cr</div>
                  <div className="text-gray-600">Annual Turnover</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Objectives */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Our Objectives</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to achieving these key objectives that drive our mission forward.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Empower Small Farmers</h3>
              <p className="text-gray-600">
                Provide resources, training, and support to small and marginal farmers to improve their 
                agricultural practices and increase their income.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Resource Aggregation</h3>
              <p className="text-gray-600">
                Collect and aggregate farmers&apos; resources and produce to achieve economies of scale and 
                better market positioning.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Market Access</h3>
              <p className="text-gray-600">
                Sell products through both online and offline markets, ensuring farmers get fair prices 
                for their produce.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Promote Millets</h3>
              <p className="text-gray-600">
                Champion millet cultivation as a sustainable and nutritious alternative, promoting 
                its health and environmental benefits.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Rural Development</h3>
              <p className="text-gray-600">
                Contribute to the overall development of rural sectors through sustainable agriculture 
                and community building.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Quality Assurance</h3>
              <p className="text-gray-600">
                Maintain high standards of quality in all our products and services, ensuring customer 
                satisfaction and farmer success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at Antharaganga Millet FPO.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Farmer First</h3>
                <p className="text-gray-600">
                  Every decision we make prioritizes the welfare and success of our farming community.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Leaf className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Sustainability</h3>
                <p className="text-gray-600">
                  We promote environmentally friendly farming practices for a better future.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Transparency</h3>
                <p className="text-gray-600">
                  Open communication and fair practices in all our dealings with farmers and customers.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Innovation</h3>
                <p className="text-gray-600">
                  Continuously improving our methods and adopting new technologies for better results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Our Leadership</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated individuals leading our mission to empower farmers and promote sustainable agriculture.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                position: "Chairman",
                description: "A veteran farmer with 25+ years of experience in millet cultivation and rural development."
              },
              {
                name: "Priya Sharma",
                position: "Managing Director",
                description: "Agricultural economist with expertise in farmer producer organizations and market development."
              },
              {
                name: "Suresh Reddy",
                position: "Technical Director",
                description: "Agricultural scientist specializing in sustainable farming practices and millet research."
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-12 h-12 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-green-600 font-medium mb-4">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
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
              Join Our Mission
            </h2>
            <p className="text-xl text-green-100">
              Be part of a community that&apos;s transforming agriculture and empowering farmers. 
              Whether you&apos;re a farmer, consumer, or supporter, there&apos;s a place for you in our story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/join"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                Become a Member
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-600 transition-colors font-semibold"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
