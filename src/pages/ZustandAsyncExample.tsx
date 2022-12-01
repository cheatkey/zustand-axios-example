import useBear from "./hooks/useBear";

interface IZustandAsyncExampleProps {}

const ZustandAsyncExample = ({}: IZustandAsyncExampleProps) => {
  const todoList = useBear((state) => state.todoList);
  const isLoading = useBear((state) => state.isLoading);
  const getNewTodoItem = useBear((state) => state.getNewTodoItem);

  return (
    <div className="flex flex-col items-center gap-4 pt-10">
      <h1 className="font-bold text-3xl">Zustand Async 예제</h1>
      <h2 className="font-medium text-xl">Todo item 불러오기</h2>

      <p>{todoList.length}개의 작업을 가져왔습니다</p>

      <button
        onClick={getNewTodoItem}
        className="w-[230px] flex justify-center"
      >
        {isLoading ? <SpinnerIcon /> : "새로운 TODO item 불러오기"}
      </button>

      <div className="flex flex-col mt-4">
        {todoList.map((todoItem) => {
          return (
            <div key={todoItem.id} className="flex flex-row items-center gap-2">
              <CheckIcon completed={todoItem.completed} />
              {todoItem.title}
            </div>
          );
        })}
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
