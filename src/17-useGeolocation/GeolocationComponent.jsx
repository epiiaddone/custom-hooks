import useGeolocation from "./useGeolocation"

export default function GeolocationComponent() {
  const {
    loading,
    error,
    data: { latitude, longitude },
  } = useGeolocation()

  return (
    <>
      <div>Loading: {loading.toString()}</div>
      <div>Error: {error?.message || 'none'}</div>
      <div>
        {latitude} x {longitude}
      </div>
    </>
  )
}
