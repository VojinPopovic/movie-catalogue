"use client";

export default function CommentsModal({ setIsModalOpen }) {
  function closeModal() {
    setIsModalOpen(false);
  }

  async function makeComment(e) {}

  return (
    <div
      onClick={closeModal}
      className="fixed top-0 left-0 min-h-screen w-full main_color flex flex-col justify-center items-center z-10"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-[95%] sm:max-w-[600px]"
      >
        <div className="relative px-4 main_color shadow rounded-3xl max-h-[80vh] overflow-y-auto pb-2 sm:pb-10 border-2 border-white">
          <div className="mx-auto sm:px-5">
            <div className="mt-4 sm:mt-10 flex">
              <p className="accent_text_color text-2xl font-semibold mb-2 sm:mb-4">
                Comments
              </p>
            </div>
            <form onSubmit={makeComment}>
              <div className="flex flex-col">
                <label className="leading-loose text-white">
                  Post a comment
                </label>
                <textarea
                  type="text"
                  className="px-4 py-2 w-full sm:text-sm rounded-md text-gray-600"
                  placeholder="Write something..."
                />
              </div>
              <div className="flex items-center space-x-4">
                <button
                  className="my-4 accent_color flex justify-center items-center w-full text-white px-4 py-3 rounded-md"
                  type="submit"
                >
                  Create
                </button>
              </div>
            </form>
            {/* <div>
              {isLoading ? (
                <PartialLoading />
              ) : (
                data
                  ?.slice()
                  .reverse()
                  .map((postComment) => {
                    return (
                      <Comment
                        key={postComment._id}
                        post={postComment}
                        profileEmail={postComment.commentmaker}
                      />
                    );
                  })
              )}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
