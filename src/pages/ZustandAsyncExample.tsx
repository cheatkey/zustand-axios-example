import Icon from "../components/icon";
import isRenderInIframe from "../utils/isRenderInIframe";
import useBear from "./hooks/useBear";

interface IZustandAsyncExampleProps {}

const ZustandAsyncExample = ({}: IZustandAsyncExampleProps) => {
  const todoList = useBear((state) => state.todoList);
  const isLoading = useBear((state) => state.isLoading);
  const loadNewItem = useBear((state) => state.loadNewItem);
  const reset = useBear((state) => state.reset);

  const isInIframe = window.location !== window.parent.location;
  const showLink = isInIframe === false;

  return (
    <div className="flex flex-col items-center gap-4 pt-10">
      {showLink && (
        <a
          href="http://localhost:3000/post/zustand-intro"
          className="flex flex-row gap-1 mb-7 items-center font-bold text-xl bg-zinc-100 text-zinc-800 py-3 px-10 rounded-xl hover:scale-105 cursor-pointer transition-transform"
        >
          <Icon.Link />
          블로그 포스트 바로가기
        </a>
      )}

      <h1 className="font-bold text-3xl">zustand combine + async 예제</h1>

      <p>{todoList.length}개의 작업을 불러왔습니다.</p>

      <div className="flex flex-row gap-4">
        <button onClick={loadNewItem} className="w-[230px] flex justify-center">
          {isLoading ? <SpinnerIcon /> : "새로운 TODO item 불러오기"}
        </button>
        <button onClick={reset}>reset</button>
      </div>

      <div className="flex flex-col mt-4 w-[30rem] ">
        <h2 className="font-medium text-xl">불러온 작업 목록</h2>
        <div className="flex flex-col gap-2 h-72 overflow-auto">
          {todoList.map((todoItem) => {
            return (
              <div
                key={todoItem.id}
                className="flex flex-row items-center gap-2"
              >
                <CheckIcon completed={todoItem.completed} />
                {todoItem.title}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ZustandAsyncExample;

const CheckIcon = ({ completed }: { completed: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="16"
    height="16"
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
      fill={completed ? "#82c91e" : "#868e96"}
    />
  </svg>
);

const SpinnerIcon = () => (
  <svg
    className="animate-spin"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M12 3a9 9 0 0 1 9 9h-2a7 7 0 0 0-7-7V3z"
      fill="rgba(241,243,245,1)"
    />
  </svg>
);
