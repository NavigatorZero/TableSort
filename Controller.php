class LogController extends Controller
{

    /**
     * @Route("/", name="log_index", methods="GET|POST")

     * @param Request $request
     * @param LogRepository $LogRepository
     * @return Response
     */
    public function index(Request $request, LogRepository $LogRepository): Response
    {
        $pagination = new TwitterBootstrap4View();
        $filters = $request->query->all();
        $page = $request->query->get('page', 1);
        if (isset($_POST["Sorting"]))
        {
            $sort = $_POST["Sorting"];
            $TempArray = [];
            parse_str($sort, $TempArray);
            $filters=$TempArray;

        }
