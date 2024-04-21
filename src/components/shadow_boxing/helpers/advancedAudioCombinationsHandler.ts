import { storage } from '@/firebase/firebaseInit'
import { ref, listAll, getDownloadURL } from 'firebase/storage'

const folderRef = ref(
  storage,
  'gs://shadow-boxing-workout.appspot.com/audio/advanced/low_complexity'
)

// INCLUDE HI_COMPLEXITY OPTION

export const combinationsArray = <string[]>[]
export const getAudioFiles = async (): Promise<void> => {
  try {
    const audioFiles = await listAll(folderRef)
    for (const itemRef of audioFiles.items) {
      try {
        const url = await getDownloadURL(itemRef)
        combinationsArray.push(url)
      } catch (error) {
        console.error('Error downloading advanced combinations audio files:' + error)
      }
    }
  } catch (error: unknown) {
    console.error('Error listing files:' + error)
  }
}
