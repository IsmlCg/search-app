import logo from "./../../assets/images/logo.svg";
import photo from "./../../assets/images/photo.png";
/**
 * Example usage:
 * ```jsx
 * <Header>
 *   <p>Your content here</p>
 * </Header>
 */
export default function Header({ children }) {
  return (
    <>
      <div
        as="header"
        className="bg-white shadow-sm lg:static lg:overflow-y-visible"
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8  shadow-sm ">
          <div className="relative flex justify-between lg:gap-8 xl:grid xl:grid-cols-10">
            <div className="flex md:absolute md:inset-y-0 md:left-0 lg:static xl:col-span-2 py-4">
              <img className="h-8 w-auto" src={logo} alt="search test" />
            </div>
            <div className="min-w-0 flex-1 px-8 lg:px-0 xl:col-span-6 py-4">
              {/*  children: The content to be rendered inside this container. It can be any
               *   valid React node, including elements, strings, or other components. */}
              {children}
            </div>
            <div className="lg:flex lg:items-center lg:justify-end py-4 xl:col-span-2">
              <img className="h-8 w-8 rounded-full" src={photo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
