type ShutdownFunction<T = never[]> = {
  fn: (args: T) => void | Promise<any>
  args?: T
}

const shutdown = async (shutdownFns?: ShutdownFunction[] ) => {
  console.log('Shutting down...')
  const promiseArr: Promise<any>[] = []
  if (shutdownFns) {
    shutdownFns.forEach((shutdownFn) => {
      const promise = shutdownFn.fn(shutdownFn.args)
      if(promise) promiseArr.push(promise)
    })
  }
  await Promise.all(promiseArr)
  console.log('Gracefully shutdown')
  process.exit(0)
}

export { shutdown, ShutdownFunction }
