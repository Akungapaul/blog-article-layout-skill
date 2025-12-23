export default function BlogArticle() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2C2C2C] py-16 px-5">
      <link href="https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap" rel="stylesheet" />
      
      <article className="max-w-3xl mx-auto">
        {/* Article Header */}
        <header className="text-center mb-12">
          {/* Category Label */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-px w-10 bg-[#E5E0D8]"></span>
            <span className="text-xs font-semibold tracking-widest uppercase text-[#C4785A]" style={{ fontFamily: 'Cormorant, serif' }}>CATEGORY</span>
            <span className="h-px w-10 bg-[#E5E0D8]"></span>
          </div>
          
          {/* Title (H1) */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Article Title Goes Here
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl text-[#6B6B6B] font-light max-w-xl mx-auto mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
            A compelling subtitle that expands on the headline and hooks the reader
          </p>
          
          {/* Author Block */}
          <div className="flex items-center justify-center gap-6 flex-wrap" style={{ fontFamily: 'Cormorant, serif' }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C4785A] to-[#A85D42] flex items-center justify-center text-white font-medium text-sm">
                AA
              </div>
              <div className="text-left">
                <div className="font-medium">Author Name</div>
                <div className="text-sm text-[#6B6B6B]">December 1, 2025</div>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-[#6B6B6B]">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              X min read
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <figure className="mb-14">
          <div className="aspect-video bg-gradient-to-br from-[#E8DFD5] via-[#D4C4B5] to-[#C4A98A] rounded-lg"></div>
          <figcaption className="text-center text-sm text-[#6B6B6B] italic mt-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Featured image caption describing the visual
          </figcaption>
        </figure>

        {/* Article Body */}
        <div className="max-w-2xl mx-auto" style={{ fontFamily: 'Cormorant, serif' }}>
          {/* Lead Paragraph */}
          <p className="text-2xl font-light leading-relaxed mb-10">
            The lead paragraph is styled larger and lighter to create a gentle on-ramp into the content. This hooks the reader and establishes the voice of the piece.
          </p>

          {/* Body Text */}
          <p className="text-xl leading-relaxed mb-7">
            Standard body paragraphs follow at a comfortable reading size. Keep paragraphs short—three to four sentences maximum—to create visual breathing room and natural pause points.
          </p>

          <p className="text-xl leading-relaxed mb-7">
            Continue with the narrative here. The max-width constraint keeps line length optimal at 65-75 characters for comfortable reading.
          </p>

          {/* H2 Heading */}
          <h2 className="text-3xl font-medium mt-16 mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Section Heading
          </h2>

          <p className="text-xl leading-relaxed mb-7">
            New section content begins here. H2 headings break the article into major thematic chunks that readers can scan.
          </p>

          {/* H3 Subheading */}
          <h3 className="text-2xl font-medium mt-12 mb-5" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Subsection Heading
          </h3>

          <p className="text-xl leading-relaxed mb-7">
            Subsection content provides a second level of hierarchy within larger sections.
          </p>

          {/* Blockquote */}
          <blockquote className="my-12 py-6 px-8 bg-[#F5F1EA] border-l-4 border-[#C4785A] rounded-r-lg">
            <p className="text-xl italic mb-0">This is a blockquote for direct quotations from external sources. It adds authority and variety to the content.</p>
            <cite className="block text-base text-[#6B6B6B] mt-3 not-italic">— Attribution Name</cite>
          </blockquote>

          <p className="text-xl leading-relaxed mb-7">
            Continue the narrative after the blockquote.
          </p>

          {/* Pull Quote */}
          <aside className="my-14 py-8 text-center relative">
            <span className="absolute top-0 left-1/2 -translate-x-1/2 text-8xl text-[#C4785A] opacity-15 leading-none" style={{ fontFamily: 'Cormorant Garamond, serif' }}>"</span>
            <p className="text-2xl md:text-3xl italic leading-relaxed relative z-10" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Pull quotes highlight key insights or particularly resonant phrases from the article.
            </p>
            <span className="block text-sm text-[#6B6B6B] mt-4 tracking-wide">— Optional Attribution</span>
          </aside>

          {/* Callout Box */}
          <div className="my-12 p-8 bg-gradient-to-br from-[#C4785A]/10 to-[#C4785A]/5 border border-[#C4785A]/20 rounded-xl">
            <h4 className="text-xl font-semibold mb-3" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Callout Title</h4>
            <p className="text-lg mb-0">
              Callout boxes contain supplementary information—research findings, tips, statistics, or warnings that support but don't interrupt the main narrative.
            </p>
          </div>

          {/* Content Image */}
          <figure className="my-12">
            <div className="aspect-[3/2] bg-gradient-to-br from-[#D4E5D9] via-[#B8D4C4] to-[#9CC4A8] rounded-lg"></div>
            <figcaption className="text-center text-sm text-[#6B6B6B] italic mt-4">
              Content image caption tied to specific point in narrative
            </figcaption>
          </figure>

          <p className="text-xl leading-relaxed mb-7">
            Continue after the image with related content.
          </p>

          {/* Bullet List */}
          <ul className="my-8 space-y-3 text-xl">
            <li className="leading-relaxed pl-6 relative before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-[#C4785A] before:rounded-full">
              First list item with substantial content
            </li>
            <li className="leading-relaxed pl-6 relative before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-[#C4785A] before:rounded-full">
              Second list item—use lists sparingly
            </li>
            <li className="leading-relaxed pl-6 relative before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-[#C4785A] before:rounded-full">
              Third list item for genuinely list-worthy content
            </li>
          </ul>

          {/* Section Divider */}
          <div className="flex items-center justify-center gap-4 my-16">
            <span className="h-px w-16 bg-[#E5E0D8]"></span>
            <span className="text-[#C4785A] text-xl">✦</span>
            <span className="h-px w-16 bg-[#E5E0D8]"></span>
          </div>

          {/* New Section After Divider */}
          <h2 className="text-3xl font-medium mt-16 mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Another Major Section
          </h2>

          <p className="text-xl leading-relaxed mb-7">
            Section dividers signal major thematic shifts and provide mental rest points for readers.
          </p>

          <p className="text-xl leading-relaxed">
            End with a strong closing paragraph that ties the piece together.
          </p>
        </div>
      </article>
    </div>
  );
}
