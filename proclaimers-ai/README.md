# Proclaimers AI

> Transform Your Ministry with AI-Powered Sermon Development

Proclaimers AI combines the theological richness of Black preaching excellence with cutting-edge technology to help pastors, students, and ministry leaders craft sermons that resonate, inspire, and transform.

## Features

- **Sermon Development Mastery**: Advanced workflow from exegesis to pulpit delivery
- **Cultural Fluency**: Commentary on current events and culturally significant dates
- **Hermeneutic Customization**: Tailored content for various theological traditions
- **Mentorship Tools**: Syllabus creation, sermon rubrics, and feedback systems
- **Social Media Optimization**: Viral quotes and engagement boosters
- **Voice of the Ancestors**: Draws from Gardner C. Taylor, James Cone, Howard Thurman, and more

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Payment**: Stripe
- **Deployment**: Netlify
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 20+ and npm
- A Stripe account (for payment processing)
- API keys for API.Bible and optional AI providers (OpenAI or Anthropic)

### Installation

1. **Clone the repository**

```bash
git clone <your-repo-url>
cd proclaimers-ai
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Then edit `.env.local` and add your API keys:

```env
# Stripe Configuration
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key_here
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key_here

# Base URL
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# API.Bible Configuration
API_BIBLE_KEY=your_api_bible_key_here

# AI Provider (choose one)
OPENAI_API_KEY=sk-your_openai_api_key_here
# OR
ANTHROPIC_API_KEY=sk-ant-your_anthropic_api_key_here
```

4. **Run the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## Getting API Keys

### Stripe

1. Go to [stripe.com](https://stripe.com) and create an account
2. Navigate to Developers → API Keys
3. Copy your test keys (they start with `sk_test_` and `pk_test_`)

### API.Bible

1. Visit [scripture.api.bible](https://scripture.api.bible)
2. Sign up for a free account
3. Create an API key in your dashboard

### OpenAI (Optional)

1. Go to [platform.openai.com](https://platform.openai.com)
2. Create an account and add billing
3. Generate an API key from the API Keys section

### Anthropic Claude (Optional)

1. Visit [console.anthropic.com](https://console.anthropic.com)
2. Sign up and add credits
3. Generate an API key

## Deployment to Netlify

### Option 1: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

### Option 2: Deploy via Git

1. Push your code to GitHub, GitLab, or Bitbucket
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
6. Add environment variables in Netlify dashboard
7. Deploy!

### Environment Variables in Netlify

Go to Site settings → Environment variables and add all the variables from your `.env.local` file.

## Project Structure

```
proclaimers-ai/
├── app/
│   ├── api/
│   │   └── create-checkout-session/  # Stripe checkout API
│   ├── builder/                      # Sermon builder page
│   ├── pricing/                      # Pricing page
│   ├── globals.css                   # Global styles
│   ├── layout.tsx                    # Root layout
│   └── page.tsx                      # Landing page
├── components/
│   ├── ui/
│   │   ├── Button.tsx               # Button component
│   │   └── Card.tsx                 # Card component
│   └── Header.tsx                   # Navigation header
├── lib/
│   └── utils.ts                     # Utility functions
└── public/                          # Static assets
```

## Key Pages

- **/** - Landing page with features and benefits
- **/pricing** - Pricing plans with Stripe integration
- **/builder** - Sermon builder interface

## Customization

### Updating Colors

Edit `app/globals.css` to customize the Apple-inspired color scheme:

```css
:root {
  --accent: #0071e3;  /* Primary accent color */
  /* ... other colors */
}
```

### Adding New Features

1. Create new components in `components/`
2. Add new pages in `app/`
3. Update navigation in `components/Header.tsx`

### Integrating AI

The sermon builder currently uses mock data. To integrate real AI:

1. Create an API route in `app/api/generate-sermon/route.ts`
2. Use OpenAI, Anthropic, or your preferred AI provider
3. Update `app/builder/page.tsx` to call your API

Example with OpenAI:

```typescript
// app/api/generate-sermon/route.ts
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const { scripture, theme, style } = await req.json();

  const completion = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: "You are Proclaimers AI, a theological assistant..."
      },
      {
        role: "user",
        content: `Create a sermon on ${scripture} with theme: ${theme}`
      }
    ],
  });

  return Response.json({ content: completion.choices[0].message.content });
}
```

## Testing Stripe Integration

Use Stripe's test card numbers:

- **Success**: 4242 4242 4242 4242
- **Decline**: 4000 0000 0000 0002
- Use any future expiration date and any CVC

## Support

For questions or issues:
- Create an issue in the repository
- Contact support at support@proclaimersai.com

## License

© 2025 Proclaimers AI. All rights reserved.

## Acknowledgments

Built with inspiration from the theological excellence of:
- Gardner C. Taylor
- Prathia Hall
- James Cone
- Howard Thurman
- Katie Cannon
- Martin Luther King Jr.

---

**Built with ❤️ for ministers, preachers, and theological educators**
