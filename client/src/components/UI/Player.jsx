import { useState } from "react";
import playerImg from "./../../assets/images/player.png";
import ModalDialog from "./ModalDialog";
import VideoPlayer from "./VideoPlayer ";
import axios from "axios";
/**
 * A component that manages an input field with optional dropdown options.
 *
 * State:
 * - showOptions: Boolean to control the visibility of options.
 * - titleModal: String for the current value of the input field.
 * - modalOpen:
 * - videos: Array containing the filtered data based on inputValue.
 *
 * Handlers:
 * - handleOpenModal:  Show or hide modal, update title and videos..
 * - handleCloseModal: modal hide.
 *
 * Example usage:
 * ```jsx
 * <Player>
 *   <p>Your content here</p>
 * </Player>
 *
 * @param {Array} data - The initial data to be filtered
 * @param {int} track - The initial track
 * @returns {JSX.Element} The Header component.
 */
export default function Player({ data, track }) {
  // This variable is for showing and hiding the album description. is boolean
  const [showPopper, setShowPopper] = useState(false);

  // Here, when the mouse enters or touches, the album description popup is displayed.
  const handleMouseEnter = () => setShowPopper(true);

  // Here, when the mouse leave, the album description popup is not displayed.
  const handleMouseLeave = () => setShowPopper(false);

  // filter query set in the modal
  const [titleModal, setTitleModal] = useState("");
  // modal show or hide
  const [modalOpen, setModalOpen] = useState(false);
  // List of suggested videos that are updated when the API is called.
  const [videos, setVideos] = useState([]);

  const handleOpenModal = (text) => {
    // modal show
    setModalOpen(true);
    // set title modal
    setTitleModal(text);

    // update videos from api
    fetchVideos(text);
  };

  const handleCloseModal = () => {
    // moda hide
    setModalOpen(false);
  };

  const fetchVideos = (searchQuery) => {
    axios
      .get(`http://localhost:5000/api/youtube`, {
        params: { search_query: searchQuery, engine: "youtube" },
      })
      .then((response) => {
        setVideos(response.data || []); // Adjust as needed based on API response
        console.log("response", response.data);
        console.log("vide", videos);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  return (
    <>
      <div class="ring-sky-300">
        <div class="bg-white border-slate-100 dark:bg-slate-800 dark:border-slate-500 border-b rounded-t-xl p-4 pb-6 sm:p-10 sm:pb-8 lg:p-6 xl:p-10 xl:pb-8 space-y-6 sm:space-y-8 lg:space-y-6 xl:space-y-8  items-center">
          <div class="flex items-center space-x-4">
            <img
              src={playerImg}
              alt=""
              width="88"
              height="88"
              class="flex-none rounded-lg bg-slate-100"
              loading="lazy"
            />
            <div class="min-w-0 flex-auto space-y-1 font-semibold">
              <p class="text-cyan-500 dark:text-cyan-400 text-sm leading-6">
                <abbr title="Track">Track:</abbr> {track}
              </p>
              <h2 class="text-slate-500 dark:text-slate-400 text-sm leading-6 truncate">
                Artist: {data.artist}
              </h2>

              <div class="group flex relativ">
                <div
                  className="relativ"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <h2 class="text-slate-500 dark:text-slate-400 text-sm leading-6 truncate">
                    Album: {data.album}
                  </h2>
                  {showPopper && (
                    <div className="absolute mt-2 w-64 rounded-md bg-cyan-500 shadow-lg overflow-hidden">
                      <div className="flex flex-col p-2">
                        <div className="mt-1 flex w-full flex-none ">
                          <span className="text-lg leading-6 text-white">
                            Description
                          </span>
                        </div>
                        <div className="mt-1 flex w-full flex-none ">
                          <span className="text-xs leading-6 text-white">
                            {data.description}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <p class="text-slate-900 dark:text-slate-50 text-md line-clamp-1">
                {data.song}
              </p>
            </div>
          </div>
          <div class="space-y-2">
            <div class="progressbar">
              <div class="bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                <div
                  class="dark:bg-cyan-400 h-2"
                  role="progressbar"
                  aria-label="music progress"
                  aria-valuenow="1456"
                  aria-valuemin="0"
                  aria-valuemax="4550"
                ></div>
              </div>
            </div>
            <div class="flex justify-between text-sm leading-6 font-medium tabular-nums">
              <div class="text-cyan-500 dark:text-slate-100">0:0</div>
              <div class="text-slate-500 dark:text-slate-400">
                {data.length}
              </div>
            </div>
          </div>
        </div>
        <div class="bg-slate-50 text-slate-500 dark:bg-slate-600 dark:text-slate-200 rounded-b-xl flex items-center">
          <div class="flex-auto flex items-center justify-evenly">
            <button type="button" aria-label="Add to favorites">
              <svg width="24" height="24">
                <path
                  d="M7 6.931C7 5.865 7.853 5 8.905 5h6.19C16.147 5 17 5.865 17 6.931V19l-5-4-5 4V6.931Z"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              class="hidden sm:block lg:hidden xl:block"
              aria-label="Previous"
            >
              <svg width="24" height="24" fill="none">
                <path
                  d="m10 12 8-6v12l-8-6Z"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6 6v12"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button type="button" aria-label="Rewind 10 seconds">
              <svg width="24" height="24" fill="none">
                <path
                  d="M6.492 16.95c2.861 2.733 7.5 2.733 10.362 0 2.861-2.734 2.861-7.166 0-9.9-2.862-2.733-7.501-2.733-10.362 0A7.096 7.096 0 0 0 5.5 8.226"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5 5v3.111c0 .491.398.889.889.889H9"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <button
            type="button"
            class="bg-white text-slate-900 dark:bg-slate-100 dark:text-slate-700 flex-none -my-2 mx-auto w-20 h-20 rounded-full ring-1 ring-slate-900/5 shadow-md flex items-center justify-center"
            aria-label="Play"
            onClick={() => handleOpenModal(data.text)}
          >
            <svg width="30" height="32" fill="currentColor" viewBox="0 0 30 32">
              <polygon points="10,4 26,16 10,28" />
            </svg>
          </button>
          <div class="flex-auto flex items-center justify-evenly">
            <button type="button" aria-label="Skip 10 seconds">
              <svg width="24" height="24" fill="none">
                <path
                  d="M17.509 16.95c-2.862 2.733-7.501 2.733-10.363 0-2.861-2.734-2.861-7.166 0-9.9 2.862-2.733 7.501-2.733 10.363 0 .38.365.711.759.991 1.176"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19 5v3.111c0 .491-.398.889-.889.889H15"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              class="hidden sm:block lg:hidden xl:block"
              aria-label="Next"
            >
              <svg width="24" height="24" fill="none">
                <path
                  d="M14 12 6 6v12l8-6Z"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18 6v12"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              class="rounded-lg text-xs leading-6 font-semibold px-2 ring-2 ring-inset ring-slate-500 text-slate-500 dark:text-slate-100 dark:ring-0 dark:bg-slate-500"
            >
              1x
            </button>
          </div>
        </div>
        {modalOpen && (
          <ModalDialog
            isOpen={modalOpen}
            onClose={handleCloseModal}
            titleModal={titleModal}
          >
            <VideoPlayer videos={videos} />
          </ModalDialog>
        )}
      </div>
    </>
  );
}
