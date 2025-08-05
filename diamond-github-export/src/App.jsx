import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { TrendingUp, ExternalLink, Copy, Check, Zap, Shield, Crown } from 'lucide-react';

// Import all Diamond assets
import diamondLogo from './assets/DMNDLOGONoBackground.png';
import diamondHero from './assets/DiamondPFP-Ryan.avif';
import diamondAbout from './assets/MemecoinPepeFemaleCharacterHoldingDiamond.jpg';
import diamondAvatar from './assets/Avatarstate.jpeg';
import diamondBoxing from './assets/DiamondBoxing.jpeg';
import diamondThrone from './assets/Throne.jpeg';
import diamondMountain from './assets/Topofmountain.jpeg';
import diamondStiffarm from './assets/Stiffarm.jpg';

import './App.css';

function App() {
  const [copied, setCopied] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const contractAddress = "0x475e372b23D75A745bCEb431107167F2583AdA4C";

  // Mouse tracking effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1, // Normalize to -1 to 1
        y: (e.clientY / window.innerHeight) * 2 - 1, // Normalize to -1 to 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  // Enhanced floating particles - optimized for performance
  const FloatingParticles = () => {
    const particles = Array.from({ length: 15 }, (_, i) => (
      <motion.div
        key={i}
        className="particle"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: `${Math.random() * 3 + 1}px`,
          height: `${Math.random() * 3 + 1}px`,
        }}
        animate={{
          y: [0, -40, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: Math.random() * 3 + 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: Math.random() * 2,
        }}
      />
    ));
    return <div className="particles-container">{particles}</div>;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white overflow-x-hidden">
      <FloatingParticles />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <img src={diamondLogo} alt="Diamond Logo" className="w-8 h-8" />
                <span className="text-xl font-bold gradient-text">DIAMOND</span>
              </div>
              
              <div className="hidden md:flex items-center space-x-8">
                <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
                <a href="#tokenomics" className="text-gray-300 hover:text-white transition-colors">Tokenomics</a>
                <a href="#nfts" className="text-gray-300 hover:text-white transition-colors">NFTs</a>
                <a href="#roadmap" className="text-gray-300 hover:text-white transition-colors">Roadmap</a>
              </div>
              
              <Button className="btn-glow">
                Connect Wallet
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <Badge className="bg-blue-600/20 text-blue-400 border-blue-400">
              <Zap className="w-4 h-4 mr-2" />
              BUILT ON BASE
            </Badge>
            
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-8xl font-bold gradient-text">
                DIAMOND
              </h1>
              <p className="text-xl text-gray-300 max-w-lg">
                The memecoin that broke free from Pepe's shadow.
              </p>
              <p className="text-2xl font-semibold text-blue-400">
                Diamond hands, diamond future.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="btn-glow">
                <TrendingUp className="w-5 h-5 mr-2" />
                Buy $DMND
              </Button>
              <Button size="lg" variant="outline" className="border-orange-500 text-orange-400 hover:bg-orange-500/10">
                <ExternalLink className="w-5 h-5 mr-2" />
                View Chart
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.img
                src={diamondHero}
                alt="Diamond Character"
                className="w-96 h-96 object-cover rounded-2xl shadow-2xl"
                animate={{
                  y: [0, -10, 0],
                }}
                style={{
                  transform: `perspective(1000px) rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * 5}deg)`,
                  transformStyle: 'preserve-3d',
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-30 animate-pulse" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 gradient-text">
              About Diamond
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet Diamond ($DMND) — the memecoin that's done playing second fiddle to anyone.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src={diamondAbout} 
                alt="Diamond vs Pepe" 
                className="w-full rounded-2xl shadow-2xl"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-6 text-white">Breaking Free</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  She was Pepe's side piece for YEARS! But quite frankly, she is sick and tired of Pepe's games. 
                  After all, she's a f@ckin' Diamond and deserves to be the star of the show!
                </p>
                <p>
                  Diamond is finally standing up for herself and has broken things off with Pepe. 
                  Now Pepe won't stop blowing up her phone or following her around town.
                </p>
                <p className="text-blue-400 font-semibold">
                  Let's show Pepe what he's missing and pass his sorry ass in Market Cap — his reign of terror has gone on long enough.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8 text-blue-400" />,
                title: "Lightning Fast",
                description: "Built on Base for ultra-fast transactions and minimal fees"
              },
              {
                icon: <Shield className="w-8 h-8 text-blue-400" />,
                title: "Diamond Hands",
                description: "Powered by the strongest diamond hands in crypto"
              },
              {
                icon: <Crown className="w-8 h-8 text-blue-400" />,
                title: "Premium Quality",
                description: "Diamond-grade tokenomics and unmatched utility"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card hover:bg-white/10 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 gradient-text">
              Tokenomics
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built on Base blockchain with diamond-solid fundamentals
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="glass-card max-w-4xl mx-auto">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-4">Contract Address</h3>
                  <div className="flex items-center justify-center gap-4 p-4 bg-gray-800/50 rounded-lg">
                    <code className="text-blue-400 font-mono text-sm break-all">
                      {contractAddress}
                    </code>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => copyToClipboard(contractAddress)}
                      className="flex-shrink-0"
                    >
                      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* NFTs Section */}
      <section id="nfts" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 gradient-text">
              Diamond NFTs
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Exclusive collectibles for the Diamond community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src={diamondBoxing} 
                alt="Diamond NFT Collection" 
                className="w-full rounded-2xl shadow-2xl"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold text-white">Exclusive Collection</h3>
              <p className="text-gray-300 text-lg">
                Own a piece of Diamond history with our exclusive NFT collection. 
                Each piece represents the strength and beauty of the Diamond community.
              </p>
              <Button size="lg" className="btn-glow">
                Mint Now
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 gradient-text">
              Roadmap
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our journey to diamond status
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                phase: "PHASE 1",
                title: "Ignore Pepe's phone calls",
                description: "✅ Successfully blocked all communication and established independence",
                image: diamondStiffarm,
                completed: true
              },
              {
                phase: "PHASE 2", 
                title: "Reach diamond status on Toshi Mart",
                description: "🔨 Currently building momentum and community strength",
                image: diamondMountain,
                completed: false
              },
              {
                phase: "PHASE 3",
                title: "Pass Pepe in Market Cap", 
                description: "📌 The ultimate goal - claiming the throne as the top memecoin",
                image: diamondThrone,
                completed: false
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card border-blue-600/30 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid lg:grid-cols-4 gap-6 p-8">
                      <div className="lg:col-span-1">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-32 lg:h-24 object-cover rounded-xl"
                        />
                      </div>
                      <div className="lg:col-span-3 flex items-center">
                        <div className="flex items-center gap-6 w-full">
                          <div className={`w-6 h-6 rounded-full flex-shrink-0 ${item.completed ? 'bg-green-500' : 'bg-gray-500'}`} />
                          <div className="flex-1">
                            <div className="flex items-center gap-4 mb-3">
                              <Badge className="text-blue-400 border-blue-400 text-sm font-semibold">
                                {item.phase}
                              </Badge>
                              <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                            </div>
                            <p className="text-gray-300 text-lg leading-relaxed">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-blue-600/30">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center justify-center space-x-4 mb-8">
              <img src={diamondLogo} alt="Diamond Logo" className="w-12 h-12" />
              <h3 className="text-3xl font-bold gradient-text">Join the Diamond Revolution</h3>
            </div>
            
            <p className="text-xl text-gray-300 mb-8">
              Built on Base • Powered by Community • Destined for Greatness
            </p>
            
            <div className="flex justify-center gap-6">
              <Button variant="outline" className="border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 font-semibold">
                Twitter
              </Button>
              <Button variant="outline" className="border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 font-semibold">
                Telegram
              </Button>
              <Button variant="outline" className="border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 font-semibold">
                Discord
              </Button>
            </div>
            
            <p className="text-gray-500 text-lg mt-12">
              © 2025 by DIAMOND. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

export default App;

