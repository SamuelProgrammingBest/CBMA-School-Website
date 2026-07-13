import Link from "next/link"
import FadeIn from "../FadeIn"

const HeadMasterMessage = () => {
  return (
    <FadeIn>
      <div className="w-full">
        <p className="mb-2 text-center text-[14px] font-bold text-primary">
          A MESSAGE FROM THE HEAD MISTRESS
        </p>

        {/* ✅ flex-col on mobile, flex-row on desktop + sane padding */}
        {/* // Toned down the desktop padding — md:p-16 was too aggressive */}
        <div className="flex flex-col items-center justify-between gap-8 p-6 md:flex-row md:p-10 lg:p-16">
          {/* ✅ full width on mobile, half on desktop */}
          <div className="w-full text-center md:w-1/2 md:text-left">
            <h1 className="mb-4 text-[24px] font-bold text-accent md:text-[30px]">
              MEET OUR HEAD OF SCHOOL
            </h1>
            <p className="text-[16px] leading-relaxed text-secondary">
              With over two decades of experience in education, our Head
              Of School has dedicated her career to building a school where every
              child feels seen, valued, and inspired to grow. Since joining
              CBMA, she has led the school with a quiet strength — raising
              academic standards while ensuring no child is left behind.
              <br />
              <br />
              Her philosophy is simple: excellence and compassion are not
              opposites. Under her leadership, CBMA has grown from a small
              community school into one of the most trusted academic
              institutions in the region — and she remains as committed to the
              last child in the classroom as she is to the first.
            </p>
          </div>

          {/* ✅ full width on mobile, auto on desktop */}
          <div className="relative w-full md:w-auto">
            <img
              src="/assets/headofschool.jpg"
              alt="Head Mistress Image"
              className="aspect-video w-full rounded-md object-cover object-[50%_21.5%] md:w-150"
            />
            <Link href="https://youtu.be/NfnxLD3lc0M?si=0w82HA32QNzXnz2p">
              <span className="absolute inset-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 transform animate-pulse rounded-full bg-accent p-2">
                <svg
                  xmlns="http://w3.org"
                  viewBox="0 0 100 100"
                  width="100%"
                  height="100%"
                >
                  <path
                    d="M52,6 C23,4 5,20 7,49 C9,78 28,95,54,93 C81,91,96,72,93,44 C90,16,74,8,52,6 Z"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    transform="rotate(-3 50 50)"
                  />
                  <path
                    d="M40,32 C38,32 37.5,33.5 37.7,35 L40.5,63 C40.7,65 42.5,66 44,65 L67,49 C68.5,48 68.5,46 67,45 L43.5,33 C42.5,32.5 41,32 40,32 Z"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="26"
                    cy="22"
                    r="2.5"
                    fill="#ffffff"
                    opacity="0.7"
                  />
                  <circle
                    cx="78"
                    cy="76"
                    r="3.5"
                    fill="#ffffff"
                    opacity="0.7"
                  />
                  <path
                    d="M78,24 L82,20 M82,24 L78,20"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    opacity="0.6"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </FadeIn>
  )
}

export default HeadMasterMessage
